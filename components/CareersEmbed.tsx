"use client";

import { useEffect } from "react";

export default function CareersEmbed() {
  useEffect(() => {
    const existing = document.getElementById("ghl-careers-embed-script");
    if (existing) return;

    const script = document.createElement("script");
    script.id = "ghl-careers-embed-script";
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const s = document.getElementById("ghl-careers-embed-script");
      if (s) s.remove();
    };
  }, []);

  return (
    <iframe
      src="https://api.leadconnectorhq.com/widget/booking/DtvHWg4TCWZXo2SVPqF3"
      id="DtvHWg4TCWZXo2SVPqF3_1778856007954"
      style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "700px" }}
      scrolling="no"
      className="w-full rounded-2xl"
    />
  );
}
