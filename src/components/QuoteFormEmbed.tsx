"use client";

import { useEffect } from "react";
import { GHL_FORMS, type FormKind } from "@/lib/site";

declare global {
  interface Window {
    __ghlFormEmbedLoaded?: boolean;
  }
}

export function QuoteFormEmbed({
  kind = "dumpster",
  height,
  className,
}: {
  kind?: FormKind;
  height?: number;
  className?: string;
}) {
  const form = GHL_FORMS[kind];
  const h = height ?? form.height;

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.__ghlFormEmbedLoaded) return;
    const s = document.createElement("script");
    s.src = "https://link.msgsndr.com/js/form_embed.js";
    s.async = true;
    document.body.appendChild(s);
    window.__ghlFormEmbedLoaded = true;
  }, []);

  return (
    <div
      className={className}
      style={{ width: "100%", maxWidth: "100%", overflow: "hidden" }}
    >
      <iframe
        src={`https://api.leadconnectorhq.com/widget/form/${form.id}`}
        style={{
          width: "100%",
          height: `${h}px`,
          border: "none",
          borderRadius: "12px",
          background: "transparent",
        }}
        id={`inline-${form.id}`}
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-activation-type="alwaysActivated"
        data-deactivation-type="neverDeactivate"
        data-form-name={form.name}
        data-height={String(h)}
        data-layout-iframe-id={`inline-${form.id}`}
        data-form-id={form.id}
        title={form.name}
      />
    </div>
  );
}
