"use client";

import { useEffect, useRef, useState } from "react";
import { CAREERS_BOOKING_URL } from "@/lib/constants";

export default function CareersEmbed() {
  const [loaded, setLoaded] = useState(false);
  const [slow, setSlow] = useState(false);
  const slowTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Load the GoHighLevel embed helper once and keep it on the page.
    // (Removing it on unmount can stop the iframe from resizing on re-mount.)
    if (!document.getElementById("ghl-careers-embed-script")) {
      const script = document.createElement("script");
      script.id = "ghl-careers-embed-script";
      script.src = "https://link.msgsndr.com/js/form_embed.js";
      script.type = "text/javascript";
      script.async = true;
      document.body.appendChild(script);
    }

    // If the calendar hasn't loaded shortly, surface the direct booking link.
    slowTimer.current = setTimeout(() => setSlow(true), 6000);
    return () => {
      if (slowTimer.current) clearTimeout(slowTimer.current);
    };
  }, []);

  function handleLoad() {
    setLoaded(true);
    setSlow(false);
    if (slowTimer.current) clearTimeout(slowTimer.current);
  }

  return (
    <div className="relative w-full">
      {/* Loading skeleton — shown until the iframe reports it has loaded */}
      {!loaded && (
        <div
          className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-white px-6 text-center"
          style={{ minHeight: 700 }}
        >
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-brand-blue/25 border-t-brand-blue" />
          <p className="font-body text-sm text-gray-500">
            Loading the booking calendar…
          </p>
          {slow && (
            <p className="font-body text-sm text-gray-500">
              Taking longer than usual?{" "}
              <a
                href={CAREERS_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand-blue underline underline-offset-4 hover:text-brand-aqua"
              >
                Click here to open the booking page →
              </a>
            </p>
          )}
        </div>
      )}

      <iframe
        src={CAREERS_BOOKING_URL}
        id="DtvHWg4TCWZXo2SVPqF3_1778856007954"
        title="Book your intro call with ES Team"
        loading="eager"
        onLoad={handleLoad}
        style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "700px" }}
        scrolling="no"
        className="w-full rounded-2xl"
      />

      {/* Persistent fallback link — always available if the embed misbehaves */}
      <p className="mt-4 text-center font-body text-sm text-gray-500">
        Don&apos;t see the calendar?{" "}
        <a
          href={CAREERS_BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-brand-blue underline underline-offset-4 hover:text-brand-aqua"
        >
          Click here to book directly →
        </a>
      </p>
    </div>
  );
}
