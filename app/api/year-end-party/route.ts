import { getStore } from "@netlify/blobs";
import { YEAR_END_PARTY_WEBHOOK_URL } from "@/lib/constants";

const RECEIPT_STORE = "year-end-party-receipts";
const MAX_FILE_BYTES = 8 * 1024 * 1024;
const ALLOWED_TYPES = /^(image\/.+|application\/pdf)$/;
// Per-person prices; the total is multiplied by headcount (registrant + guests).
// Keep in sync with PAYMENT_OPTIONS in components/YearEndPartyForm.tsx.
const PRICES: Record<string, number> = { Downpayment: 2000, "Full payment": 4000 };

function field(formData: FormData, name: string) {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim() : "";
}

// Receives the registration form, stores the payment receipt in Netlify Blobs,
// then forwards the details (with a link to the receipt) to the GHL inbound webhook.
export async function POST(request: Request) {
  const formData = await request.formData();

  // Honeypot: bots fill hidden fields. Pretend success so they don't retry.
  if (field(formData, "bot-field")) return Response.json({ ok: true });

  const name = field(formData, "name");
  const phone = field(formData, "phone");
  const email = field(formData, "email");
  const paymentType = field(formData, "payment_type");
  const foodPreference = field(formData, "food_preference");
  const bringingSomeone = field(formData, "bringing_someone");
  const plusOnes = bringingSomeone === "Yes" ? field(formData, "plus_ones") : "0";
  const receipt = formData.get("payment_receipt");

  if (!name || !phone || !email || !paymentType || !foodPreference || !bringingSomeone) {
    return Response.json({ error: "Please fill out all required fields." }, { status: 400 });
  }
  if (bringingSomeone === "Yes" && !["1", "2"].includes(plusOnes)) {
    return Response.json({ error: "Please choose how many people you're bringing." }, { status: 400 });
  }
  if (!Object.hasOwn(PRICES, paymentType)) {
    return Response.json({ error: "Please choose a payment option." }, { status: 400 });
  }
  const headcount = 1 + Number(plusOnes);
  const paymentAmount = PRICES[paymentType] * headcount;
  if (!(receipt instanceof File) || receipt.size === 0) {
    return Response.json({ error: "Please upload your payment receipt." }, { status: 400 });
  }
  if (receipt.size > MAX_FILE_BYTES || !ALLOWED_TYPES.test(receipt.type)) {
    return Response.json({ error: "Receipt must be an image or PDF under 8 MB." }, { status: 400 });
  }

  const ext = receipt.name.includes(".") ? receipt.name.split(".").pop()!.toLowerCase().replace(/[^a-z0-9]/g, "") : "";
  const key = `${crypto.randomUUID()}${ext ? `.${ext}` : ""}`;

  try {
    const store = getStore(RECEIPT_STORE);
    await store.set(key, await receipt.arrayBuffer(), {
      metadata: { contentType: receipt.type, originalName: receipt.name, email },
    });
  } catch (err) {
    console.error("[year-end-party] receipt upload failed", err);
    return Response.json({ error: "We couldn't upload your receipt. Please try again." }, { status: 500 });
  }

  const receiptUrl = new URL(`/api/year-end-party/receipt/${key}`, request.url).toString();
  const [firstName, ...rest] = name.split(/\s+/);

  const payload = {
    event: "2nd Annual ES Team Building",
    event_dates: "Dec. 12-14, 2026",
    full_name: name,
    first_name: firstName,
    last_name: rest.join(" "),
    phone,
    email,
    payment_type: paymentType,
    payment_amount: paymentAmount,
    payment_summary: `${paymentType} - PHP ${paymentAmount.toLocaleString("en-PH")} for ${headcount} ${headcount === 1 ? "person" : "people"}`,
    payment_receipt_url: receiptUrl,
    food_preference: foodPreference,
    bringing_someone: bringingSomeone,
    plus_ones: plusOnes,
    headcount,
    submitted_at: new Date().toISOString(),
  };

  const res = await fetch(YEAR_END_PARTY_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  }).catch((err) => {
    console.error("[year-end-party] webhook request failed", err);
    return null;
  });

  if (!res?.ok) {
    console.error("[year-end-party] webhook returned", res?.status, await res?.text().catch(() => ""));
    return Response.json({ error: "We couldn't send your registration. Please try again." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
