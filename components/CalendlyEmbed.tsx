"use client";

import { useEffect } from "react";

export default function CalendlyEmbed() {
  useEffect(() => {
    const existing = document.getElementById("ghl-form-embed-script");
    if (existing) return;

    const script = document.createElement("script");
    script.id = "ghl-form-embed-script";
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const s = document.getElementById("ghl-form-embed-script");
      if (s) s.remove();
    };
  }, []);

  return (
    <iframe
      src="https://api.leadconnectorhq.com/widget/booking/EyC8zQL6nO6GhnaiH4sE"
      id="EyC8zQL6nO6GhnaiH4sE_1777381384757"
      style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "700px" }}
      scrolling="no"
      className="w-full rounded-2xl"
    />
  );
}
