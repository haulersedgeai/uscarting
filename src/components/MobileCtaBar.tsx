import Link from "next/link";
import { Phone, MessageSquare, Truck } from "lucide-react";
import { SITE } from "@/lib/site";

export function MobileCtaBar() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 grid grid-cols-3 bg-[var(--color-ink)] text-white border-t border-white/10">
      <a
        href={SITE.phoneTel}
        className="flex flex-col items-center justify-center py-2 gap-0.5 text-xs font-semibold border-r border-white/10"
      >
        <Phone size={18} className="text-[var(--color-orange)]" />
        Call
      </a>
      <a
        href={SITE.smsTel}
        className="flex flex-col items-center justify-center py-2 gap-0.5 text-xs font-semibold border-r border-white/10"
      >
        <MessageSquare size={18} className="text-[var(--color-orange)]" />
        Text
      </a>
      <Link
        href="/get-a-quote"
        className="flex flex-col items-center justify-center py-2 gap-0.5 text-xs font-semibold bg-[var(--color-orange)]"
      >
        <Truck size={18} />
        Get Quote
      </Link>
    </div>
  );
}
