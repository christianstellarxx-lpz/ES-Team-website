import { getStore } from "@netlify/blobs";

const RECEIPT_STORE = "year-end-party-receipts";

// Serves an uploaded payment receipt. Keys are random UUIDs, so only someone
// holding the link sent to GHL can open it.
export async function GET(_request: Request, ctx: RouteContext<"/api/year-end-party/receipt/[key]">) {
  const { key } = await ctx.params;
  if (!/^[0-9a-f-]{36}(\.[a-z0-9]+)?$/.test(key)) {
    return new Response("Not found", { status: 404 });
  }

  const result = await getStore(RECEIPT_STORE).getWithMetadata(key, { type: "arrayBuffer" });
  if (!result) return new Response("Not found", { status: 404 });

  const contentType = typeof result.metadata.contentType === "string" ? result.metadata.contentType : "application/octet-stream";

  return new Response(result.data, {
    headers: {
      "Content-Type": contentType,
      "Content-Disposition": "inline",
      "Cache-Control": "private, max-age=3600",
      "X-Robots-Tag": "noindex",
    },
  });
}
