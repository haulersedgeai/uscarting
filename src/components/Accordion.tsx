"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function FaqAccordion({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  return (
    <Accordion.Root type="single" collapsible className="w-full divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
      {items.map((item, i) => (
        <Accordion.Item key={i} value={`item-${i}`} className="py-1">
          <Accordion.Header>
            <Accordion.Trigger
              className={cn(
                "group flex w-full items-center justify-between py-5 text-left text-base md:text-lg font-bold text-[var(--color-ink)] hover:text-[var(--color-orange)]"
              )}
            >
              <span className="pr-4">{item.q}</span>
              <ChevronDown
                size={20}
                className="shrink-0 text-[var(--color-orange)] transition-transform group-data-[state=open]:rotate-180"
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="pb-5 text-[var(--color-steel)] leading-relaxed">
            {item.a}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
