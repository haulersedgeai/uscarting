// Centralized FAQ content. Each FAQ that ships in a UI must also be emitted as
// FAQPage JSON-LD on the same page so AI answer engines can lift them cleanly.

export type Faq = { q: string; a: string };
export type FaqCategory = { id: string; title: string; items: Faq[] };

// ─── Homepage: top questions, answers always visible ───────────────────────
export const HOMEPAGE_FAQS: Faq[] = [
  {
    q: "How fast can you deliver a dumpster in Fairfield County or Westchester?",
    a: "Same- or next-day in most of our service area. Call before noon Monday–Friday and we can usually have a roll-off in your driveway by the end of the day. Saturday delivery available on request.",
  },
  {
    q: "How much does it cost to rent a dumpster?",
    a: "Pricing depends on size and your town. A 10-yard typically starts in the low-$400s and a 30-yard runs into the $700s — all-in, with weight included and no fuel or delivery surcharges. Call or use the instant quote form for an exact number for your job.",
  },
  {
    q: "What's included in the dumpster rental price?",
    a: "Delivery, pickup, disposal up to the included weight allowance, and a 7-day rental period. No hidden weight, fuel, or environmental fees. If you go over the weight, you see the scale ticket and pay a per-ton overage — that's it.",
  },
  {
    q: "How is junk removal priced?",
    a: "By the volume your items take up in our truck — measured in cubic yards. We give you an all-in price on site before we start loading, so you can scale the job up or down or say no without a charge.",
  },
  {
    q: "Do I need a permit for a dumpster in Greenwich or Stamford?",
    a: "If the dumpster sits on your private driveway, no permit is needed. For street placement, Greenwich requires a permit through the DPW Highway Division and Stamford through the Office of Operations — most other towns in our area have similar rules. We'll tell you which office to call before delivery.",
  },
  {
    q: "How long can I keep the dumpster?",
    a: "Seven days standard. Extensions are easy — call before pickup day and we'll roll the rental at a low daily rate. Contractors with active job sites often keep cans for weeks at a time.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes — fully licensed and insured in both Connecticut and New York. We carry general liability and workers' comp, and we provide a COI on request for property managers, HOAs, and commercial clients.",
  },
  {
    q: "What can't go in the dumpster?",
    a: "Hazardous materials (paint, propane, oil, chemicals, asbestos), tires, e-waste, and refrigerators with refrigerant still in them. We can take all of those separately through our junk-removal service — we just can't mix them into the roll-off.",
  },
];

// ─── /faq page: 30+ Qs organized by category ──────────────────────────────
export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: "pricing",
    title: "Pricing & cost",
    items: [
      {
        q: "How much does it cost to rent a dumpster in Greenwich CT?",
        a: "10-yard rentals in Greenwich typically start in the low-$400s and a 30-yard runs into the $700s, all-in with weight included. The exact number depends on the can size, included tonnage, and your specific street — call us or use the instant quote form for a binding price.",
      },
      {
        q: "What's the average cost of junk removal in Westchester?",
        a: "Junk removal in Westchester is priced by volume — what your items take up in our truck. A small load (one couch + a few boxes) typically runs $150–$300; a full single-car-garage clean-out runs $500–$900. You see the all-in price on site before we start.",
      },
      {
        q: "Are there hidden fees on dumpster rentals?",
        a: "No. Our price is all-in: delivery, pickup, disposal up to the included weight, and 7 days of rental time. We don't charge fuel surcharges, environmental fees, or delivery-zone upcharges. If you go over weight, you pay the per-ton overage at the scale-ticket rate — and we show you the ticket.",
      },
      {
        q: "What happens if I go over the weight limit?",
        a: "You pay the actual overage at the transfer station's per-ton rate. We weigh the can on the way out, show you the scale ticket, and bill the difference. There's no mystery math and no rounding up.",
      },
      {
        q: "How is junk removal priced — by weight or volume?",
        a: "By volume. We quote in cubic-yard increments based on how much space your items take up in the truck. Weight doesn't factor into the price unless the load is unusually dense (a half-truck of concrete, for example), in which case we'll flag it before loading.",
      },
      {
        q: "Do you charge for delivery?",
        a: "No separate delivery fee. Delivery and pickup are bundled into the flat rental price. The number you see at booking is the number you pay — assuming you stay within the included weight allowance.",
      },
      {
        q: "What's included in the dumpster rental price?",
        a: "Delivery, pickup, disposal up to the included tonnage (1,000–6,000 lbs depending on size), and 7 days of rental time. No fuel surcharges, no environmental fees, no admin fees.",
      },
      {
        q: "Do you require a deposit?",
        a: "For homeowner accounts we typically collect payment at the time of booking. For established contractors and property managers we run on net-30 invoicing after a couple of completed jobs.",
      },
    ],
  },
  {
    id: "permits",
    title: "Permits & local rules",
    items: [
      {
        q: "Do I need a permit for a dumpster in Greenwich, CT?",
        a: "Not if the dumpster sits on your private driveway. For street placement, Greenwich requires a Right-of-Way Use Permit through the DPW Highway Division (101 Field Point Rd). We deliver the can after you receive the permit — we'll point you to the right office before scheduling.",
      },
      {
        q: "Do I need a permit for a dumpster in Westchester County?",
        a: "Westchester County itself doesn't issue dumpster permits — each town does. Driveway placement never requires a permit. Street placement is regulated by the village/town DPW: Scarsdale, Rye, Mamaroneck, and White Plains all have different applications and fees. Call your DPW before booking street delivery.",
      },
      {
        q: "Can I put a dumpster on the street in Stamford?",
        a: "Yes, with a Right-of-Way Permit from Stamford's Office of Operations (888 Washington Blvd). Permit fees and duration vary. We can deliver as soon as you have the permit number — bring a copy on delivery day.",
      },
      {
        q: "Can I put a dumpster on the street in Rye, NY?",
        a: "Yes, with a permit from the Rye Department of Public Works. Rye's permit application requires the rental dates, location, and our COI — we provide the COI directly to the city if you give us their email.",
      },
      {
        q: "Will I need to provide proof of insurance for HOA-managed properties?",
        a: "Almost always yes — most HOAs and condo associations require a Certificate of Insurance naming the property manager as additional insured. We issue COIs same-day on request. Send us the COI requirements and we'll route the document directly to your manager.",
      },
      {
        q: "Do I need a permit on private property in a gated community?",
        a: "No municipal permit, but most gated communities require notification or HOA approval. Some — especially in Belle Haven (Greenwich) and Shippan Point (Stamford) — require a COI and a delivery-window window agreement. Check with your HOA office before booking.",
      },
    ],
  },
  {
    id: "logistics",
    title: "Scheduling & delivery",
    items: [
      {
        q: "How fast can you deliver a dumpster?",
        a: "Same- or next-day across most of Fairfield and Westchester counties. Call before noon Monday–Friday and we can usually drop the can the same afternoon. Saturday delivery is available on request; Sunday is reserved for emergencies.",
      },
      {
        q: "Do you offer same-day dumpster delivery?",
        a: "Yes — most days. The earlier you call, the better the odds. Same-day rolls require a confirmed phone call (not a form submission) so we can lock the route. Call (917) 664-4794.",
      },
      {
        q: "How long can I keep the dumpster?",
        a: "Seven days included. Extensions are billed at a low daily rate — just call before your scheduled pickup day. We routinely keep cans on contractor job sites for several weeks at a time.",
      },
      {
        q: "Can I extend the rental period?",
        a: "Yes. Call before pickup day and we'll extend at a daily rate. There's no penalty for asking and no charge for advance notice.",
      },
      {
        q: "Where will you place the dumpster?",
        a: "Wherever you point — typically the driveway or a flat area on your property. We need about 60 feet of straight-line clearance for the truck. On asphalt we put boards under the rollers to protect the surface.",
      },
      {
        q: "Will the dumpster damage my driveway?",
        a: "Not when we place it correctly. We use plywood boards under the rollers on asphalt to spread the load, and we'll spot a soft driveway before we put two tons on it. Concrete and pavers are fine.",
      },
      {
        q: "Do I need to be home for delivery or pickup?",
        a: "No. As long as we know exactly where to place the can and the path is clear, we can deliver and pickup unattended. Most of our roll-off drops happen with no one home.",
      },
      {
        q: "Do you work weekends?",
        a: "Saturday delivery and pickup are routinely available. Sunday is reserved for emergencies or pre-arranged contractor jobs.",
      },
    ],
  },
  {
    id: "what-fits",
    title: "What fits & what's allowed",
    items: [
      {
        q: "What can I put in a roll-off dumpster?",
        a: "Almost any non-hazardous solid waste: construction debris, furniture, household trash, appliances (without refrigerant), yard waste, flooring, drywall, lumber, and roofing. Mixed loads are fine — we don't require sorting.",
      },
      {
        q: "What items are prohibited?",
        a: "No hazardous materials (paint, propane tanks, oil, chemicals, pesticides), no asbestos, no tires, no batteries, no medical waste, no refrigerators with refrigerant, no liquids. Our junk-removal service can take most of those items separately through proper channels.",
      },
      {
        q: "Can I throw away a mattress?",
        a: "Yes — mattresses go in the roll-off or we'll haul them with our junk-removal crew. Some transfer stations charge extra for mattresses; if you have more than a few, we'll route them to a mattress recycler instead.",
      },
      {
        q: "Can I throw away appliances?",
        a: "Most appliances yes — washers, dryers, dishwashers, ovens, microwaves. Refrigerators and freezers need to have refrigerant evacuated first; we handle that as a separate appliance-removal job rather than tossing them in the roll-off.",
      },
      {
        q: "Can I throw away construction debris and household trash together?",
        a: "Yes. Mixed loads are the norm for us — drywall, lumber, furniture, bagged household trash, flooring, all in the same can. We sort at the transfer station; you don't have to.",
      },
      {
        q: "What size dumpster do I need for a kitchen remodel?",
        a: "A 15-yard handles most single-room kitchen remodels — cabinets, countertops, flooring, and drywall from one room. If you're also touching the floors or walls beyond the kitchen, step up to a 20-yard.",
      },
      {
        q: "What size dumpster do I need for a full house cleanout?",
        a: "A 20-yard handles most single-family-home clean-outs. For a 4+ bedroom house with a finished basement and a packed garage, a 30-yard is the safer bet. Two-can swaps are also common — drop a 20, fill it, swap to a second 20.",
      },
    ],
  },
  {
    id: "service-area",
    title: "Service area",
    items: [
      {
        q: "Do you service Greenwich, CT?",
        a: "Yes — Greenwich is home base. Our office is on S. Water Street downtown. We deliver to all Greenwich neighborhoods: Old Greenwich, Cos Cob, Riverside, Belle Haven, Backcountry, Mid-Country, Glenville, and the rest.",
      },
      {
        q: "Do you serve all of Westchester County?",
        a: "We serve all of Westchester south of I-287 daily and most of northern Westchester (Bedford, Mount Kisco, Cortlandt, Yorktown, Somers, North Salem) on regular routes. Same-day is realistic across the entire county.",
      },
      {
        q: "What's your service radius?",
        a: "Roughly 50 miles from Greenwich — all of Fairfield County, all of Westchester County, plus most of New Haven, Hartford, Middlesex, Litchfield, and New London counties in Connecticut.",
      },
      {
        q: "Do you serve New York City or Long Island?",
        a: "We don't routinely serve the five boroughs or Long Island. Westchester and lower Fairfield are our core market. For NYC-area work, we'll refer you to a partner.",
      },
      {
        q: "Do you serve Hartford or Litchfield County?",
        a: "Yes, with one to two days of lead time. Hartford, West Hartford, Glastonbury, Manchester, Torrington, Litchfield, and surrounding towns — we run weekly routes north.",
      },
    ],
  },
  {
    id: "business",
    title: "Business & trust",
    items: [
      {
        q: "Are you licensed and insured?",
        a: "Yes — fully licensed and insured in Connecticut and New York. We carry general liability and workers' comp coverage. COIs are available same-day on request for property managers, HOAs, and commercial clients.",
      },
      {
        q: "How long have you been in business?",
        a: "Since 2014 — over a decade in Greenwich. We're family-owned and locally operated, and half our work is repeat customers (contractors, property managers, and homeowners we've served before).",
      },
      {
        q: "Do you offer commercial accounts?",
        a: "Yes — property managers, real estate agents, retailers, restaurants, hotels, and contractors all run on commercial accounts with us. Net-30 invoicing, COIs on file, and off-hours scheduling are standard for commercial clients.",
      },
      {
        q: "Do you provide a Certificate of Insurance (COI) on file?",
        a: "Yes — same-day. Send us your property manager's COI requirements and we'll route the certificate directly to them. Many of the building managers and HOAs in lower Fairfield already have our COI on file.",
      },
      {
        q: "Do you offer net-30 billing?",
        a: "Yes, for established contractors and property managers. First few jobs are paid on completion; after that we set up net-30 invoicing through your AP team.",
      },
      {
        q: "Who is the owner?",
        a: "U.S. Carting is independently owned and operated. The same ownership also operates Grizzly Junk Pros in other markets — but the two companies run with separate teams, dispatch, fleets, and customer service. U.S. Carting's focus is exclusively Fairfield County and Westchester.",
      },
    ],
  },
];

// Total: count items across all categories so the build can report the number.
export const FAQ_TOTAL_COUNT = FAQ_CATEGORIES.reduce(
  (sum, c) => sum + c.items.length,
  0
);

// ─── Per-dumpster-size FAQs ────────────────────────────────────────────────
export const SIZE_FAQS: Record<string, Faq[]> = {
  "10-yard-dumpster": [
    {
      q: "What fits in a 10 yard dumpster?",
      a: "Roughly 4 pickup-truck loads or 60 large contractor trash bags. A 10-yard handles a single-room renovation, a small bathroom gut, a garage purge, or a roof tear-off up to about 15 squares.",
    },
    {
      q: "How big is a 10 yard dumpster?",
      a: "Approximately 12 ft long × 8 ft wide × 3.5 ft high. It fits on most residential driveways without blocking a second car.",
    },
    {
      q: "What's the weight limit on a 10 yard dumpster?",
      a: "1,000 lbs included in the rental price. Overage is billed at the transfer-station per-ton rate — you see the scale ticket. The 10-yard is the right pick for heavy materials like concrete, dirt, or asphalt, where weight hits before volume does.",
    },
    {
      q: "Is a 10 yard too small for a kitchen remodel?",
      a: "For a small bathroom remodel, the 10 is perfect. For a full kitchen, step up to a 15-yard — cabinets, countertops, and flooring from a typical kitchen will push a 10 to capacity.",
    },
    {
      q: "How long can I keep a 10 yard dumpster?",
      a: "Seven days standard, extendable by the day. The 10-yard fits tight driveways, so if you need a longer hold for a slow-roll renovation, just ask at booking and we'll plan around it.",
    },
  ],
  "15-yard-dumpster": [
    {
      q: "What fits in a 15 yard dumpster?",
      a: "Roughly 6 pickup-truck loads or 90 large contractor trash bags. It's sized for mid-range remodels — a full kitchen, a finished basement, a two-room renovation, or a mid-size roofing job.",
    },
    {
      q: "How big is a 15 yard dumpster?",
      a: "Approximately 14 ft long × 8 ft wide × 4.5 ft high. Similar footprint to the 10-yard but with taller walls, so it still fits most driveways.",
    },
    {
      q: "What's the weight limit on a 15 yard dumpster?",
      a: "2,000 lbs included. The 15 is our most-rented can because the weight allowance covers mixed loads — drywall, lumber, household clutter — without pushing you into overage.",
    },
    {
      q: "Is a 15 yard big enough for a basement cleanout?",
      a: "For most residential basements, yes. A typical finished basement worth of furniture, boxes, and old appliances fits in a 15. For a packed unfinished basement plus a garage, step up to a 20.",
    },
    {
      q: "Can I put concrete in a 15 yard dumpster?",
      a: "Small amounts mixed with other debris, yes. For pure concrete loads, use the 10-yard — concrete hits weight before it fills the larger can, and you'll end up paying overage on capacity you didn't use.",
    },
  ],
  "20-yard-dumpster": [
    {
      q: "What fits in a 20 yard dumpster?",
      a: "Roughly 8 pickup-truck loads or 120 large contractor trash bags. A 20-yard handles a whole-home renovation, a single-family estate clean-out, a roof up to about 30 squares, or a multi-room flooring tear-out.",
    },
    {
      q: "How big is a 20 yard dumpster?",
      a: "Approximately 16 ft long × 8 ft wide × 4.5 ft high. The footprint is longer than a 10 or 15, so check the driveway length before booking — you need about 22 feet of straight space.",
    },
    {
      q: "What's the weight limit on a 20 yard dumpster?",
      a: "4,000 lbs included. That covers mixed demolition and household debris for most whole-house projects without overage.",
    },
    {
      q: "Is a 20 yard dumpster too big for my driveway?",
      a: "Usually not. The 20-yard has a longer footprint than a 10 but the same width. If your driveway holds two cars end-to-end, a 20 will fit. If you're not sure, send a photo at booking and we'll check.",
    },
    {
      q: "Do I need a 20 or a 30 yard for a full house cleanout?",
      a: "20 covers most single-family clean-outs. A 30 is the right call for 4+ bedroom homes with finished basements, packed garages, or sheds. When in doubt, drop a 20 first — we can swap to a second can if you fill the first.",
    },
  ],
  "30-40-yard-dumpster": [
    {
      q: "What fits in a 30 yard dumpster?",
      a: "Roughly 12 pickup-truck loads or 180 large contractor trash bags. A 30 handles whole-property clean-outs, major demolition, large new-build debris, or two layers of roofing on a large home.",
    },
    {
      q: "How big is a 30 yard dumpster?",
      a: "Approximately 22 ft long × 8 ft wide × 6 ft high. The high walls mean light bulky materials — siding, cabinets, insulation, framing — pack in fast. You need about 30 feet of driveway clearance.",
    },
    {
      q: "What's the weight limit on a 30 yard dumpster?",
      a: "6,000 lbs included. That covers light-but-bulky construction loads cleanly. For concrete-heavy or dirt-heavy work, the 10-yard is still the right tool — those materials hit weight before they fill volume.",
    },
    {
      q: "When should I rent a 30 or 40 yard dumpster?",
      a: "Whole-property tear-outs, commercial remodels, new construction, or projects where you'd otherwise need two smaller cans. If the choice is between a 20 and a 30, and the job is big or unpredictable, the 30 saves a swap fee.",
    },
    {
      q: "Can a 30 yard dumpster fit in a residential driveway?",
      a: "On most suburban driveways, yes — the width is the same as a 10 or 20. The constraint is length: you need about 30 feet of straight clearance. Steep grades and narrow turn-ins are the real limit, not the can itself.",
    },
  ],
};

// ─── Per-service FAQs (supplements existing service.faq if present) ───────
// These are merged with services.ts faq[] at render time. Keep service-specific.
export const EXTRA_SERVICE_FAQS: Record<string, Faq[]> = {
  "roll-off-dumpster-rental": [
    {
      q: "What size dumpster do I need?",
      a: "10-yard for one room, 15-yard for a basement or kitchen remodel, 20-yard for whole-house projects, 30/40-yard for major demo. When in doubt, send us a photo of the job and we'll size it for you.",
    },
    {
      q: "Can I mix construction debris and household trash?",
      a: "Yes. Mixed loads are the norm. We sort at the transfer station — you don't have to. Just keep hazardous items, tires, and refrigerators out of the can.",
    },
    {
      q: "Do you provide street-placement permits?",
      a: "We don't pull the permit for you, but we'll tell you exactly which office to call in your town and what to ask for. We can submit our COI directly to the city on request.",
    },
    {
      q: "What if I underestimate the size?",
      a: "We'll swap the can. Call when the first one's full and we can usually drop a second the same or next day. You pay for both rentals at the per-can rate.",
    },
  ],
  "junk-removal": [
    {
      q: "Do you remove items from inside the house?",
      a: "Yes — basement, third floor, attic, anywhere. We bring dollies, straps, and the muscle. You don't carry anything to the curb.",
    },
    {
      q: "How long does a junk removal appointment take?",
      a: "Most residential jobs are done in 30–90 minutes. Full clean-outs run 2–4 hours. We confirm a 2-hour arrival window and the crew calls 15–30 minutes before they show up.",
    },
    {
      q: "Can you take just one item?",
      a: "Yes — single-item pickups are a regular part of our day. A couch, a fridge, a hot tub. We have a single-item minimum price; ask at quote.",
    },
    {
      q: "Do you recycle or just dump everything?",
      a: "Recycle and donate first whenever possible. Furniture in good shape goes to local charities (with a tax receipt). Metals, electronics, and tires go to recyclers. The rest goes to a permitted transfer station.",
    },
  ],
  "residential-cleanouts": [
    {
      q: "Do I need to sort or label anything?",
      a: "No. We can do whole-home clean-outs where you point to the keep pile and we take everything else. For estates and downsizes we can also work room-by-room with you on what stays and what goes.",
    },
    {
      q: "Will you take items in good condition to charity?",
      a: "Yes, when it makes sense. Furniture, housewares, and clothing in resellable condition go to local donation centers. We bring back the receipt for your records.",
    },
    {
      q: "Can you work with the realtor or executor directly?",
      a: "Yes — we routinely coordinate with realtors, estate attorneys, and out-of-state family. Send us the contact info and we'll handle scheduling without you in the middle.",
    },
    {
      q: "How quickly can you do a full house cleanout?",
      a: "Most single-family clean-outs are done in one day with a four-person crew. Larger estates run two to three days. We'll give you a firm timeline at the walk-through.",
    },
  ],
  "estate-cleanouts": [
    {
      q: "Are you discreet with personal effects?",
      a: "Yes — discretion is part of the job. We work room by room when the family wants, set aside obvious personal items (photos, documents, jewelry) for review, and dispose of the rest without bringing it through the neighborhood.",
    },
    {
      q: "Can you do an estate cleanout while the home is being shown?",
      a: "Yes. We schedule around open houses and showings, leave the home broom-swept after each visit, and can break the job into half-days if needed.",
    },
    {
      q: "Do you provide donation receipts?",
      a: "Yes, when items go to a charity that issues receipts. Standard turnaround is one week from the donation date.",
    },
  ],
  "construction-debris-removal": [
    {
      q: "Do you work with general contractors?",
      a: "Yes — about half our business is contractor work. We answer the phone live, we show up when we say, and we set up net-30 billing after a few completed jobs.",
    },
    {
      q: "Can you do same-day swaps on a multi-can job?",
      a: "Most days, yes. Call by mid-morning and we can swap a full can for an empty one the same afternoon.",
    },
    {
      q: "Do you take mixed C&D loads?",
      a: "Yes. Drywall, lumber, flooring, cabinets, tile, roofing — all in the same can. No sorting required on your end.",
    },
  ],
  "light-demolition": [
    {
      q: "What can you demolish?",
      a: "Interior walls, sheds, decks, hot tubs, kitchens, baths, above-ground pools, and most accessory structures. We don't do structural work on load-bearing walls or anything requiring permits — we'll point you to a GC for that.",
    },
    {
      q: "Do you pull demo permits?",
      a: "Light interior demo doesn't require a permit in most towns. For shed and deck demolition, some towns require a teardown permit — we'll flag it at the estimate and tell you where to apply.",
    },
    {
      q: "Do you haul away the debris in the same trip?",
      a: "Yes — that's the point. Demo and haul-off in one job, one bill, one day.",
    },
  ],
  "appliance-removal": [
    {
      q: "Do you take refrigerators?",
      a: "Yes — refrigerators and freezers are routinely picked up. We route them to a recycler that handles the refrigerant properly. Don't toss a fridge in the roll-off; it'll get rejected at the transfer station.",
    },
    {
      q: "Do appliances need to be disconnected first?",
      a: "Helpful but not required. We can disconnect water lines and unplug electrical for most standard installs. Hardwired or gas appliances should be disconnected by a licensed pro before we arrive.",
    },
    {
      q: "Do you take washers and dryers from the basement?",
      a: "Yes. Two-person stair carry is standard, and we bring dollies and stair runners to protect the walls.",
    },
  ],
  "mattress-removal": [
    {
      q: "Do you recycle mattresses?",
      a: "When a recycler is available, yes. The mattress recycling market shifts by season; we'll route to recycling first and to a transfer station second.",
    },
    {
      q: "Can you remove a mattress from a third-floor walk-up?",
      a: "Yes. Two-person carry, narrow stairwells, awkward turns — it's a standard job for us.",
    },
    {
      q: "Do you take old box springs?",
      a: "Yes, in any condition. Sagging, broken, bedbug-treated — we handle all of it.",
    },
  ],
  "furniture-removal": [
    {
      q: "Do you donate furniture that's still in good shape?",
      a: "Yes, whenever the local donation centers will accept it. Sofas, dressers, dining sets — if it's clean and intact, we route it to a charity and bring the receipt back to you.",
    },
    {
      q: "Can you disassemble large pieces?",
      a: "Yes — sectional couches, bed frames, armoires, anything that won't fit through the door in one piece. We bring tools.",
    },
    {
      q: "Do you take outdoor or patio furniture?",
      a: "Yes — patio sets, grills, fire pits, planters. Drained of fuel where applicable.",
    },
  ],
  "yard-waste-removal": [
    {
      q: "Can you take whole tree stumps?",
      a: "Yes, with some caveats on size. Small to medium stumps fit in a 15 or 20-yard can. For large stumps that need grinding, we'll refer you to a tree service for the grind and then haul the chips.",
    },
    {
      q: "Do you do storm cleanup?",
      a: "Yes — that's some of our busiest weeks. After a storm we run extra trucks. Call the morning after the storm and we'll get you on the schedule.",
    },
    {
      q: "Do I have to bag the yard waste?",
      a: "Bags help us move faster, but we can rake and load loose piles too. Either way, you don't have to drag anything to the curb.",
    },
  ],
  "hot-tub-removal": [
    {
      q: "Do I need to drain the tub first?",
      a: "Yes — please drain it before we arrive. We bring the saws to cut the shell down to manageable pieces, but full of water it weighs too much to move.",
    },
    {
      q: "Can you disconnect the electrical?",
      a: "Yes — we cut at the circuit breaker. Hardwired GFCI panels are handled by us; if you have a sub-panel issue, we'll flag a licensed electrician.",
    },
    {
      q: "How long does hot tub removal take?",
      a: "Most standard tubs are gone in 2–3 hours. Built-in or deck-set tubs run 4–6 hours including cleanup.",
    },
  ],
  "shed-demolition": [
    {
      q: "Do you remove the contents of the shed too?",
      a: "Yes — contents removal is a common add-on. We empty the shed first, demo the structure, and haul both in one trip.",
    },
    {
      q: "Do you remove the concrete slab?",
      a: "Optional — slab removal is quoted separately because it requires extra labor and weight. Most customers leave the slab and use the cleared area as a paver pad.",
    },
    {
      q: "What sheds can you demo?",
      a: "Wood-framed, metal, plastic/resin, and prefab kit sheds. If it's bigger than 12×16 or has electrical and plumbing, we'll come walk it before quoting.",
    },
  ],
  "garage-cleanout": [
    {
      q: "Do you take old paint and chemicals from the garage?",
      a: "Wet paint, propane, oil, and household chemicals are hazardous — we can't take them in the truck. We'll set them aside and point you to your town's household hazardous-waste day or a licensed hauler.",
    },
    {
      q: "Do you take lawn mowers and other gas equipment?",
      a: "Yes — drained of fuel. If the mower or string trimmer is still full, drain it onto cardboard or call us before the appointment so we can plan.",
    },
    {
      q: "Can you do a garage cleanout in one visit?",
      a: "Yes. Most single-car garages are done in 2 hours; two-car garages in 3–4. We sweep at the end so you can park the same day.",
    },
  ],
  "basement-cleanout": [
    {
      q: "Do you protect the walls and stairs?",
      a: "Yes — we bring drop cloths, stair runners, and corner guards for the route from basement to truck. It's a standard part of every basement clean-out.",
    },
    {
      q: "Can you handle hoarder-level basements?",
      a: "Yes, but we'll come walk it first to scope properly. Hoarder situations often involve biohazards (rodents, mold) that need PPE and special routing.",
    },
    {
      q: "Do you take old building materials and stored renovation debris?",
      a: "Yes — leftover drywall, lumber, tile, fixtures, paint cans (dried). Wet paint and chemicals need to go through hazardous waste.",
    },
  ],
  "attic-cleanout": [
    {
      q: "Can you remove old insulation?",
      a: "Light insulation cleanup yes — bagged or loose fiberglass we'll handle. Asbestos-containing vermiculite or older blown-in needs an abatement contractor; we'll flag it on the walk-through.",
    },
    {
      q: "Do attics need special prep?",
      a: "Mostly clearing a path to the access. If the access is a pull-down stair, we bring our own ladder. We also bring lights since most attics aren't wired well.",
    },
    {
      q: "How much can fit in an attic cleanout?",
      a: "Most attic clean-outs come out to half a 15-yard can — boxes, decorations, old furniture. Big attics with stored building materials can fill a full 15.",
    },
  ],
  "e-waste-recycling": [
    {
      q: "Do you recycle TVs and monitors?",
      a: "Yes — flat-screens, CRTs, monitors all go to certified recyclers. Most curbside pickups won't take them, which is why this is a common service for us.",
    },
    {
      q: "Can I keep the hard drive for security reasons?",
      a: "Yes — we can pull the drive on site and hand it to you for wiping or shredding. We don't charge extra for the swap.",
    },
    {
      q: "Do you take small electronics in bulk?",
      a: "Yes — phones, tablets, cables, routers, modems. Schools, offices, and IT teams routinely call us for closet clean-outs of accumulated e-waste.",
    },
  ],
  "tire-recycling": [
    {
      q: "How many tires can you take at once?",
      a: "From a single tire to a full truckload. Auto shops and tire installers often run on monthly pickups with us.",
    },
    {
      q: "Do you take tires on rims?",
      a: "Yes — both with and without rims. Rims are routed to scrap metal recycling.",
    },
    {
      q: "Why don't transfer stations take tires?",
      a: "Most CT and NY transfer stations charge per-tire fees because tires require specialty recyclers. We bundle tires into bulk loads to keep the per-tire cost reasonable.",
    },
  ],
  "office-cleanout": [
    {
      q: "Can you work after hours?",
      a: "Yes — off-hours and weekend work is standard for occupied office buildings. Send us your building's loading-dock hours and COI requirements at booking.",
    },
    {
      q: "Do you donate office furniture?",
      a: "Yes when possible. Desks, chairs, and conference tables in good condition route to local non-profits; we bring the receipts back.",
    },
    {
      q: "Can you decommission a server room?",
      a: "Yes — equipment removal, cabling, and certified data-destruction routing. We coordinate with your IT team on the data-handling chain of custody.",
    },
  ],
  "renovation-cleanup": [
    {
      q: "Can you do final cleanup before the homeowner walk-through?",
      a: "Yes — that's exactly the gap we fill. We pull leftover materials, sweep, and get the property handover-ready without booking a separate cleaner.",
    },
    {
      q: "Do you work with general contractors on punch-lists?",
      a: "Yes, routinely. Send us the punch-list and we'll knock out the haul/sweep items so your crew can focus on finish work.",
    },
    {
      q: "Can you remove floor protection and drop cloths?",
      a: "Yes — final-walk protection removal is part of standard renovation cleanup.",
    },
  ],
  "grizzly-bags": [
    {
      q: "How does Grizzly Bags differ from a roll-off?",
      a: "No rental clock and no driveway commitment. You buy the bag, fill it on your timeline, then email us to grab it. Bags hold roughly the same as a 3-yard mini-can.",
    },
    {
      q: "Where can I get a Grizzly Bag?",
      a: "We can ship one to you, or you can pick one up from our Greenwich office. Local hardware partners sometimes stock them too — call for the current list.",
    },
    {
      q: "What can I put in a Grizzly Bag?",
      a: "Same rules as a roll-off — no hazardous waste, no tires, no batteries. Construction debris, household trash, yard waste are all fine.",
    },
  ],
  "hotel-cleanouts": [
    {
      q: "Can you do property-wide mattress turnovers?",
      a: "Yes — that's a regular job for us. We schedule around occupancy, work floor by floor, and price by volume for predictable budgeting.",
    },
    {
      q: "Do you carry the necessary COIs for hotel properties?",
      a: "Yes — we keep COIs on file with most of the regional flag managers and can route additional certificates same-day on request.",
    },
    {
      q: "Can you handle tenant-abandonment clean-outs?",
      a: "Yes — multi-family and short-term rental abandonment is part of our regular volume. Photo documentation included.",
    },
  ],
  "foreclosure-cleanouts": [
    {
      q: "Do you provide before/after photo documentation?",
      a: "Yes — every foreclosure clean-out includes geotagged photos before and after. We send them with the invoice.",
    },
    {
      q: "Do you work with asset managers and bank REO teams?",
      a: "Yes. Invoicing format, photo standards, and turnaround times follow asset-manager conventions. Send us your specs at booking.",
    },
    {
      q: "Can you do refrigerator and food disposal for foreclosed properties?",
      a: "Yes — abandoned refrigerator clean-out (which is often the worst part of the job) is a routine line item. We bring sealed containers and PPE.",
    },
  ],
};

// ─── Per-location FAQs (generated) ─────────────────────────────────────────
// Town-specific permit info. Towns NOT listed get a generic answer.
type PermitInfo = {
  office: string;
  notes?: string;
};

export const PERMIT_INFO: Record<string, PermitInfo> = {
  "greenwich-ct": {
    office: "Greenwich DPW Highway Division (101 Field Point Rd)",
    notes:
      "Right-of-Way Use Permit required for street placement; driveway placement does not require a permit.",
  },
  "stamford-ct": {
    office: "Stamford Office of Operations (888 Washington Blvd)",
    notes: "Right-of-Way Permit required for street placement.",
  },
  "norwalk-ct": {
    office: "Norwalk DPW",
    notes: "Encumbrance permit required for street or sidewalk placement.",
  },
  "westport-ct": {
    office: "Westport DPW",
    notes: "Permit required for street placement; quick turnaround in most cases.",
  },
  "darien-ct": {
    office: "Darien DPW",
    notes: "Right-of-Way permit required for street placement.",
  },
  "new-canaan-ct": {
    office: "New Canaan DPW",
    notes: "Permit required for street placement; HOA approval common in private associations.",
  },
  "fairfield-ct": {
    office: "Fairfield DPW",
    notes: "Encroachment permit required for street placement.",
  },
  "bridgeport-ct": {
    office: "Bridgeport DPW",
    notes: "Right-of-Way permit required for street placement.",
  },
  "rye-ny": {
    office: "Rye DPW",
    notes: "Permit application requires our COI; we can route directly to the city.",
  },
  "white-plains-ny": {
    office: "White Plains DPW",
    notes: "Permit required for street or sidewalk placement.",
  },
  "scarsdale-ny": {
    office: "Scarsdale DPW",
    notes:
      "Village permit required for any street placement; HOA approval common in the Heathcote and Quaker Ridge sections.",
  },
  "mamaroneck-ny": {
    office: "Village/Town of Mamaroneck DPW",
    notes:
      "Note: the Town and Village of Mamaroneck are separate jurisdictions — call the right one for your address.",
  },
  "new-rochelle-ny": {
    office: "New Rochelle DPW",
    notes: "Permit required for street placement.",
  },
  "yonkers-ny": {
    office: "Yonkers DPW",
    notes: "Permit required for street or sidewalk placement.",
  },
  "harrison-ny": {
    office: "Harrison DPW",
    notes: "Permit required for street placement.",
  },
};

export function buildLocationFaqs(loc: {
  slug: string;
  name: string;
  state: string;
  county: string;
}): Faq[] {
  const permit = PERMIT_INFO[loc.slug];
  const permitAnswer = permit
    ? `Driveway placement never requires a permit. For street placement in ${loc.name}, contact ${permit.office}. ${permit.notes ?? ""} We can route our COI directly to the city if your application needs it.`.trim()
    : `Driveway placement doesn't require a permit in ${loc.name}. For street placement, contact the ${loc.name} DPW or town clerk — every town in ${loc.county} has its own application and fee schedule. We'll point you to the right office before delivery.`;

  return [
    {
      q: `How fast can you deliver a dumpster to ${loc.name}?`,
      a: `Same- or next-day across ${loc.name}. Call before noon Monday–Friday and we can usually drop a roll-off the same afternoon. Saturday delivery is available on request.`,
    },
    {
      q: `Do I need a permit for a dumpster in ${loc.name}?`,
      a: permitAnswer,
    },
    {
      q: `What does dumpster rental cost in ${loc.name}?`,
      a: `Pricing in ${loc.name} follows our standard rate card — 10-yards in the low-$400s, 30-yards into the $700s, all-in with weight included. ${loc.name} is on our regular routes so there's no delivery surcharge or zone upcharge.`,
    },
    {
      q: `Do you serve HOA-managed properties and gated communities in ${loc.name}?`,
      a: `Yes. We issue same-day COIs naming the property manager as additional insured, and we route them straight to your HOA office on request. Many ${loc.name} property managers already have our COI on file.`,
    },
    {
      q: `Do you offer junk removal in ${loc.name}?`,
      a: `Yes — full-service junk removal across all of ${loc.name}. Two-person crew, all-in pricing, sweep-out finish. Same-day appointments are usually available when you call before mid-morning.`,
    },
  ];
}
