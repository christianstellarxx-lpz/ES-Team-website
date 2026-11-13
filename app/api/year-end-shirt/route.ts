import { getStore } from "@netlify/blobs";
import { YEAR_END_SHIRT_WEBHOOK_URL } from "@/lib/constants";
import {
  EMAIL_PATTERN,
  PICKUP_OPTIONS,
  SHIRT_MAX_FILE_BYTES,
  SHIRT_MAX_QUANTITY,
  SHIRT_PRICE,
  SHIRT_RECEIPT_TYPES,
  SHIRT_SIZES,
  shirtOrdersClosed,
} from "@/lib/year-end-shirt";

// Same store as the party receipts, so the existing /api/year-end-party/receipt/[key] route serves these links too.
const RECEIPT_STORE = "year-end-party-receipts";

function field(formData: FormData, name: string) {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim() : "";
}

function parseShirts(raw: string): { fit: string; size: string }[] | null {
  try {
    const shirts: unknown = JSON.parse(raw);
    if (!Array.isArray(shirts) || shirts.length < 1 || shirts.length > SHIRT_MAX_QUANTITY) return null;
    const valid = shirts.every(
      (s) =>
        s &&
        typeof s.fit === "string" &&
        Object.hasOwn(SHIRT_SIZES, s.fit) &&
        SHIRT_SIZES[s.fit].includes(s.size)
    );
    return valid ? shirts.map((s) => ({ fit: s.fit, size: s.size })) : null;
  } catch {
    return null;
  }
}

// Receives a polo order, stores the payment receipt in Netlify Blobs,
// then forwards the order (with a link to the receipt) to the GHL inbound webhook.
export async function POST(request: Request) {
  if (shirtOrdersClosed()) {
    return Response.json({ error: "Orders are now closed." }, { status: 403 });
  }
  if (!YEAR_END_SHIRT_WEBHOOK_URL) {
    console.error("[year-end-shirt] YEAR_END_SHIRT_WEBHOOK_URL is not set");
    return Response.json({ error: "Orders aren't open yet. Please try again later." }, { status: 503 });
  }

  const formData = await request.formData();

  // Honeypot: bots fill hidden fields. Pretend success so they don't retry.
  if (field(formData, "bot-field")) return Response.json({ ok: true });

  const name = field(formData, "name");
  const email = field(formData, "email");
  const pickup = field(formData, "pickup_method");
  const confirmed = field(formData, "confirm") === "yes";
  const shirts = parseShirts(field(formData, "shirts"));
  const receipt = formData.get("payment_receipt");

  if (!name || !email || !pickup || !confirmed) {
    return Response.json({ error: "Please fill out all required fields." }, { status: 400 });
  }
  if (!EMAIL_PATTERN.test(email)) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  if (!PICKUP_OPTIONS.includes(pickup)) {
    return Response.json({ error: "Please choose how you'll get your shirt." }, { status: 400 });
  }
  if (!shirts) {
    return Response.json({ error: "Please pick a fit and size for each shirt." }, { status: 400 });
  }
  if (!(receipt instanceof File) || receipt.size === 0) {
    return Response.json({ error: "Please upload your proof of payment." }, { status: 400 });
  }
  if (receipt.size > SHIRT_MAX_FILE_BYTES || !SHIRT_RECEIPT_TYPES.includes(receipt.type)) {
    return Response.json({ error: "Receipt must be a JPG, PNG, or PDF up to 5 MB." }, { status: 400 });
  }

  const ext = { "image/jpeg": "jpg", "image/png": "png", "application/pdf": "pdf" }[receipt.type];
  const key = `${crypto.randomUUID()}.${ext}`;

  try {
    await getStore(RECEIPT_STORE).set(key, await receipt.arrayBuffer(), {
      metadata: { contentType: receipt.type, originalName: receipt.name, email },
    });
  } catch (err) {
    console.error("[year-end-shirt] receipt upload failed", err);
    return Response.json({ error: "We couldn't upload your receipt. Please try again." }, { status: 500 });
  }

  // Group identical fit+size so the sheet reads like "2x Men's Cut L, 1x Women's Cut M".
  const counts = new Map<string, number>();
  for (const s of shirts) counts.set(`${s.fit} ${s.size}`, (counts.get(`${s.fit} ${s.size}`) ?? 0) + 1);
  const shirtsSummary = [...counts].map(([label, n]) => `${n}x ${label}`).join(", ");

  const [firstName, ...rest] = name.split(/\s+/);
  const totalAmount = SHIRT_PRICE * shirts.length;

  const payload = {
    event: "ES Team Official Polo 2026",
    full_name: name,
    first_name: firstName,
    last_name: rest.join(" "),
    email,
    quantity: shirts.length,
    shirts_summary: shirtsSummary,
    total_amount: totalAmount,
    payment_summary: `PHP ${totalAmount.toLocaleString("en-PH")} for ${shirts.length} ${shirts.length === 1 ? "shirt" : "shirts"}`,
    pickup_method: pickup,
    payment_receipt_url: new URL(`/api/year-end-party/receipt/${key}`, request.url).toString(),
    submitted_at: new Date().toISOString(),
  };

  const res = await fetch(YEAR_END_SHIRT_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  }).catch((err) => {
    console.error("[year-end-shirt] webhook request failed", err);
    return null;
  });

  if (!res?.ok) {
    console.error("[year-end-shirt] webhook returned", res?.status, await res?.text().catch(() => ""));
    return Response.json({ error: "We couldn't send your order. Please try again." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
