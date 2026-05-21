import type { ServiceItem } from "./types";

export const SERVICES: ServiceItem[] = [
  {
    slug: "roll-off-dumpster-rental",
    category: "rental",
    title: "Roll-Off Dumpster Rental",
    h1: "Roll-Off Dumpster Rental",
    metaTitle: "Roll-Off Dumpster Rental in CT & Westchester | U.S. Carting",
    metaDescription:
      "Same-day roll-off dumpster delivery across Fairfield, New Haven & Westchester. 10, 15, 20, and 30/40-yard cans. Upfront pricing. 7-day rentals.",
    intro:
      "Pick a size, pick a day. We drop the can where you need it, give you a full week to fill it, then haul it off when you're done. Pricing is all-in with weight included.",
    whatsIncluded: [
      "Same- or next-day delivery in most service areas",
      "Walk-in door so you don't have to throw debris over the rail",
      "7-day rental period (extensions available)",
      "Weight allowance included (1,000–6,000 lbs by size)",
      "Driveway-friendly drop with boards used on request",
    ],
    items: [
      "10-yard for tight spots and small jobs",
      "15-yard for mid-size remodels",
      "20-yard for full-home renovations",
      "30/40-yard for major demolition or commercial builds",
    ],
    relatedSlugs: ["junk-removal", "residential-cleanouts", "construction-debris-removal"],
    faq: [
      {
        q: "How quickly can you deliver?",
        a: "Most days we can have a dumpster in your driveway within 24 hours — often same-day if you call before noon.",
      },
      {
        q: "What's the rental period?",
        a: "Seven days standard. Need it longer? Just call — extensions are easy and we'll work with your project timeline.",
      },
      {
        q: "Do you need a permit?",
        a: "If the can sits on your private driveway, no. For street placement most towns in our area require a permit — we'll tell you who to call.",
      },
    ],
  },
  {
    slug: "junk-removal",
    category: "junk",
    title: "Full-Service Junk Removal",
    h1: "Full-Service Junk Removal",
    metaTitle: "Junk Removal in CT & Westchester | U.S. Carting",
    metaDescription:
      "Skip the heavy lifting. We load, haul, and recycle/donate what we can. Same-day junk removal in Greenwich, Stamford, Westport, Scarsdale and beyond.",
    intro:
      "Point to what needs to go. Our crew loads it, hauls it, and gets it to the right place — donation, recycling, or transfer station. You get an all-in price before we start.",
    whatsIncluded: [
      "Two-person crew with all the gear",
      "All-in pricing — no surprise weight or dump fees",
      "We sweep up before we leave",
      "Donation receipts when we can drop items off",
      "Same-day appointments most days",
    ],
    items: [
      "Furniture, mattresses, box springs",
      "Appliances including fridges and freezers",
      "TVs, monitors, printers, hard drives",
      "Hot tubs, pool tables, and other big-ticket items",
      "Construction and renovation debris",
      "Yard waste and brush",
    ],
    relatedSlugs: ["residential-cleanouts", "appliance-removal", "mattress-removal", "furniture-removal"],
    faq: [
      {
        q: "How is junk removal priced?",
        a: "By the volume your stuff takes up in our truck. We give you the all-in number before we start so you can say yes, no, or scale the job up or down.",
      },
      {
        q: "Do I need to move things outside?",
        a: "Nope. We come into the home, the basement, the third floor — wherever the stuff is.",
      },
    ],
  },
  {
    slug: "residential-cleanouts",
    category: "cleanout",
    title: "Residential Clean-Outs",
    h1: "Residential Clean-Outs",
    metaTitle: "House, Garage & Basement Clean-Out Service | U.S. Carting",
    metaDescription:
      "Garage, basement, attic, shed, or full-house clean-outs. We haul everything, recycle what we can, leave the space broom-swept.",
    intro:
      "Whether it's a single room or a whole house, we'll empty it down to the studs if that's the job. Estates, downsizes, moves, foreclosures — same crew, same all-in pricing.",
    whatsIncluded: [
      "All labor and lifting",
      "Disposal, donation, and recycling fees",
      "Broom-sweep at the end",
      "Coordination with realtors and estate attorneys when needed",
    ],
    items: [
      "Garage clean-outs",
      "Basement clean-outs",
      "Attic clean-outs",
      "Shed clean-outs and shed demolition",
      "Full-house clean-outs",
      "Estate clean-outs",
      "Foreclosure clean-outs",
      "Restoration and renovation cleanup",
    ],
    relatedSlugs: ["estate-cleanouts", "junk-removal", "foreclosure-cleanouts"],
  },
  {
    slug: "estate-cleanouts",
    category: "cleanout",
    title: "Estate Clean-Out Service",
    h1: "Estate Clean-Out Service",
    metaTitle: "Estate Clean-Out Service in CT & Westchester | U.S. Carting",
    metaDescription:
      "Compassionate, discreet estate clean-outs. We sort, donate, recycle, and haul — coordinating with executors, realtors, and family on your schedule.",
    intro:
      "Closing out an estate is hard work. We do the lifting and the logistics so you can focus on what matters. Donations get receipts. Sensitive items get handled with care.",
    whatsIncluded: [
      "Walk-through with a real human, not a robot quote",
      "Sorting and labeling of items to keep, donate, recycle, or remove",
      "Coordination with executors, realtors, and family members",
      "Donation drop-offs to local charities (with receipts)",
      "Broom-sweep finish ready for showing",
    ],
    items: [
      "Whole-home contents removal",
      "Discreet handling of personal effects",
      "Donation pickups for clothing, books, housewares",
      "Document shredding referrals",
      "Coordination with downsize and senior-move specialists",
    ],
    relatedSlugs: ["residential-cleanouts", "foreclosure-cleanouts", "junk-removal"],
  },
  {
    slug: "foreclosure-cleanouts",
    category: "cleanout",
    title: "Foreclosure & REO Clean-Outs",
    h1: "Foreclosure & REO Clean-Outs",
    metaTitle: "Foreclosure Clean-Out Service in CT & NY | U.S. Carting",
    metaDescription:
      "Fast, fully-licensed foreclosure and REO clean-outs. Photo documentation, broom-sweep finish, and invoicing built for asset managers.",
    intro:
      "We've worked with realtors, banks, and asset managers for years. Photo documentation before and after, prompt invoicing, broom-sweep finish — and a crew that respects the property next door, too.",
    whatsIncluded: [
      "Photo documentation before/after",
      "Disposal of abandoned personal property",
      "Yard debris removal and lawn touch-up",
      "Broom-sweep finish",
      "Asset-manager-friendly invoicing",
    ],
    items: [
      "Interior contents removal",
      "Refrigerator and food disposal",
      "Yard waste and exterior debris",
      "Appliance haul-away",
      "Light demo when boarding requires it",
    ],
    relatedSlugs: ["estate-cleanouts", "residential-cleanouts"],
  },
  {
    slug: "construction-debris-removal",
    category: "demolition",
    title: "Construction Debris Removal",
    h1: "Construction Debris Removal",
    metaTitle: "Construction Debris Removal in CT & NY | U.S. Carting",
    metaDescription:
      "Contractor-grade hauling for active job sites. Drywall, lumber, flooring, cabinets, roofing. Same-day calls answered live.",
    intro:
      "When a contractor calls, time is money. We answer the phone, we show up, and we keep the job site moving. Drop a roll-off, switch out cans on a multi-week build, or call us in for a one-time grunt-work haul — your call.",
    whatsIncluded: [
      "Same-day responses on most calls",
      "Switch-outs for multi-can projects",
      "Mixed loads — drywall, lumber, flooring, cabinets",
      "Light demolition support",
      "Net-30 billing available for established contractors",
    ],
    items: [
      "Drywall and plaster",
      "Lumber and framing",
      "Tile and flooring",
      "Cabinetry and millwork",
      "Roofing shingles and underlayment",
      "Siding tear-off",
    ],
    relatedSlugs: ["roll-off-dumpster-rental", "light-demolition", "renovation-cleanup"],
  },
  {
    slug: "light-demolition",
    category: "demolition",
    title: "Light Demolition",
    h1: "Light Demolition & Removal",
    metaTitle: "Light Demolition & Removal Service | U.S. Carting",
    metaDescription:
      "Walls, sheds, decks, hot tubs, kitchens — we demo it and haul it in one trip. Save a contractor call. Same-day quotes.",
    intro:
      "We do the demo and the haul in one trip — no separate contractor, no two days of standing-around bills. Walls down to the studs, sheds to the slab, decks to the dirt.",
    whatsIncluded: [
      "Demo and haul in one job",
      "Drop cloths and floor protection",
      "All disposal included",
      "Broom-sweep finish",
    ],
    items: [
      "Interior wall demo",
      "Shed demolition and removal",
      "Deck tear-down",
      "Hot tub demolition",
      "Kitchen and bath gut-outs",
      "Above-ground pool removal",
    ],
    relatedSlugs: ["construction-debris-removal", "hot-tub-removal", "shed-demolition"],
  },
  {
    slug: "appliance-removal",
    category: "junk",
    title: "Appliance Removal & Recycling",
    h1: "Appliance Removal & Recycling",
    metaTitle: "Appliance Removal & Recycling | U.S. Carting",
    metaDescription:
      "Fridges, freezers, washers, dryers, dishwashers, ovens — hauled out, recycled where we can. Same-day appointments.",
    intro:
      "Old appliances are heavy, awkward, and not allowed at most curbside pickups. We bring the dolly, we navigate the stairs, we take it to a recycler that handles the refrigerants and metals properly.",
    whatsIncluded: [
      "Two-person lift on stairs and tight spaces",
      "Refrigerant-safe recycling for fridges and freezers",
      "Metal recycling for washers, dryers, and ovens",
      "Same-day pickup most days",
    ],
    items: [
      "Refrigerators and freezers",
      "Washers and dryers",
      "Dishwashers and ovens",
      "Microwaves and small appliances",
      "Water heaters (electric)",
      "Air conditioners (window and central units)",
    ],
    relatedSlugs: ["junk-removal", "mattress-removal", "furniture-removal"],
  },
  {
    slug: "mattress-removal",
    category: "junk",
    title: "Mattress & Box Spring Removal",
    h1: "Mattress & Box Spring Removal",
    metaTitle: "Mattress Removal & Recycling | U.S. Carting",
    metaDescription:
      "Hauled out by the crew, recycled when possible. Single mattresses or a whole hotel — we've got the truck.",
    intro:
      "Mattresses are a nightmare to get rid of. We've moved thousands. From a single twin to a hotel turnover, we'll handle it and steer the material to a recycler when one's available.",
    whatsIncluded: [
      "Two-person carry from any room",
      "Recycling routing where available",
      "Volume pricing for property managers and hotels",
    ],
    items: [
      "Twin, full, queen, king mattresses",
      "Box springs",
      "Bed frames and headboards",
      "Crib mattresses",
      "Memory foam, latex, and innerspring",
    ],
    relatedSlugs: ["furniture-removal", "junk-removal", "hotel-cleanouts"],
  },
  {
    slug: "furniture-removal",
    category: "junk",
    title: "Furniture Removal",
    h1: "Furniture Removal",
    metaTitle: "Furniture Removal in CT & Westchester | U.S. Carting",
    metaDescription:
      "Couches, sectionals, desks, dressers — hauled out the same day. Donation drop-offs when items are still in good shape.",
    intro:
      "Couches don't fit in cars. We bring the truck and the muscle. When a piece still has life in it, we route it to a local donation center and bring you back the receipt.",
    whatsIncluded: [
      "Two-person lift and carry",
      "Donation drop-offs (with receipt) for items in good shape",
      "Disassembly available for tight stairwells",
    ],
    items: [
      "Sofas, sectionals, and recliners",
      "Dining tables and chairs",
      "Bedroom sets and dressers",
      "Office desks and credenzas",
      "Outdoor furniture and patio sets",
    ],
    relatedSlugs: ["mattress-removal", "junk-removal", "estate-cleanouts"],
  },
  {
    slug: "yard-waste-removal",
    category: "specialty",
    title: "Yard Waste & Brush Removal",
    h1: "Yard Waste & Brush Removal",
    metaTitle: "Yard Waste & Brush Removal | U.S. Carting",
    metaDescription:
      "Storm debris, brush piles, leaves, branches, fence and shrub removal. Cleared and hauled the same week — often the next day.",
    intro:
      "Storm came through? Landscaper left a pile? We haul yard waste and brush by the truckload — and if it's bigger than a pickup load, a 15 or 20-yard can will hold the whole job.",
    whatsIncluded: [
      "Same-week pickup most days",
      "Loading included — leave the pile where it is",
      "Composting where available",
    ],
    items: [
      "Storm debris and downed limbs",
      "Brush piles",
      "Leaves and grass clippings (bagged)",
      "Old fence sections",
      "Shrub and root removal",
    ],
    relatedSlugs: ["roll-off-dumpster-rental", "junk-removal"],
  },
  {
    slug: "hot-tub-removal",
    category: "specialty",
    title: "Hot Tub Removal & Demolition",
    h1: "Hot Tub Removal & Demolition",
    metaTitle: "Hot Tub Removal & Demolition | U.S. Carting",
    metaDescription:
      "We disconnect, cut down, and haul off the hot tub — usually same day. No empty tub sitting in your yard for weeks.",
    intro:
      "Hot tubs are a famous junk-removal nightmare. We cut them down in place, recycle the metal frame, and haul the shell out the same day.",
    whatsIncluded: [
      "Power disconnect (cut at the circuit)",
      "In-place demolition",
      "Metal recycling",
      "Same-day haul-out",
    ],
    items: [
      "Acrylic and fiberglass tubs",
      "Wood-framed tubs",
      "Cedar barrel tubs",
      "Built-in tubs (deck-set)",
    ],
    relatedSlugs: ["light-demolition", "junk-removal"],
  },
  {
    slug: "shed-demolition",
    category: "specialty",
    title: "Shed Demolition & Removal",
    h1: "Shed Demolition & Removal",
    metaTitle: "Shed Demolition & Removal | U.S. Carting",
    metaDescription:
      "We take the shed down to the slab — or to the dirt — and haul it all off. Wood, metal, plastic. Same week.",
    intro:
      "We bring the saws, we bring the truck. The shed comes down, the contents come out, and your yard gets its corner back.",
    whatsIncluded: [
      "Demolition labor",
      "Disposal of all debris",
      "Contents clean-out option",
    ],
    items: [
      "Wood-framed sheds",
      "Metal sheds",
      "Plastic / resin sheds",
      "Concrete slab disposal (if applicable)",
    ],
    relatedSlugs: ["light-demolition", "residential-cleanouts"],
  },
  {
    slug: "garage-cleanout",
    category: "cleanout",
    title: "Garage Clean-Out",
    h1: "Garage Clean-Out Service",
    metaTitle: "Garage Clean-Out Service in CT & NY | U.S. Carting",
    metaDescription:
      "Park inside again. We empty garages of decades-old clutter — tools, paint, bikes, lawn equipment — in one visit.",
    intro:
      "Most garages haven't been emptied since the homeowners moved in. We come in, work room by room (or pile by pile), and leave you a clean slab in one visit.",
    whatsIncluded: [
      "All labor and disposal",
      "Sweep-out at the end",
      "Recycling of metals, e-waste, and tires",
    ],
    items: [
      "Lawn equipment (drained of fuel)",
      "Bikes and sporting goods",
      "Tools and toolboxes",
      "Building materials",
      "Tires (recycled separately)",
    ],
    relatedSlugs: ["basement-cleanout", "residential-cleanouts", "junk-removal"],
  },
  {
    slug: "basement-cleanout",
    category: "cleanout",
    title: "Basement Clean-Out",
    h1: "Basement Clean-Out Service",
    metaTitle: "Basement Clean-Out Service | U.S. Carting",
    metaDescription:
      "Decades of storage hauled out in one day. We do the stairs so you don't have to.",
    intro:
      "Basement clean-outs are stairs-heavy work and we're equipped for it. Furniture, boxes, old appliances — we'll get it up and out without scuffing the walls.",
    whatsIncluded: [
      "Two-person stair carry",
      "Wall and stair protection",
      "All disposal included",
      "Broom-sweep finish",
    ],
    items: [
      "Old furniture",
      "Storage boxes",
      "Defunct appliances",
      "Holiday decorations",
      "Exercise equipment",
    ],
    relatedSlugs: ["garage-cleanout", "attic-cleanout", "residential-cleanouts"],
  },
  {
    slug: "attic-cleanout",
    category: "cleanout",
    title: "Attic Clean-Out",
    h1: "Attic Clean-Out Service",
    metaTitle: "Attic Clean-Out Service | U.S. Carting",
    metaDescription:
      "We handle the heat, the dust, and the awkward stairs. Attic cleared in one visit.",
    intro:
      "Attics are hot, dusty, and often packed with decades of \"we'll deal with it later.\" We deal with it.",
    whatsIncluded: [
      "All labor and stair work",
      "Dust mitigation",
      "Light insulation cleanup (where present)",
      "All disposal",
    ],
    items: [
      "Stored furniture",
      "Holiday decorations",
      "Old books and papers",
      "Insulation debris",
      "Defunct HVAC components",
    ],
    relatedSlugs: ["basement-cleanout", "garage-cleanout", "estate-cleanouts"],
  },
  {
    slug: "e-waste-recycling",
    category: "specialty",
    title: "E-Waste Recycling",
    h1: "E-Waste & Electronics Recycling",
    metaTitle: "E-Waste Recycling — Monitors, TVs, Computers | U.S. Carting",
    metaDescription:
      "TVs, monitors, computers, printers, and hard drives recycled responsibly. We pull from the home, you keep the data tag.",
    intro:
      "Most haulers won't touch electronics. We will. We route TVs, monitors, and computers to certified recyclers — and you can keep the hard drive if you want to wipe it yourself.",
    whatsIncluded: [
      "Pickup from inside the home or office",
      "Certified recycler routing",
      "Hard-drive removal on request",
    ],
    items: [
      "Flat-screen and CRT TVs",
      "Computer monitors",
      "Desktops and laptops",
      "Printers and scanners",
      "Hard drives and servers",
      "Audio equipment",
    ],
    relatedSlugs: ["junk-removal", "office-cleanout"],
  },
  {
    slug: "tire-recycling",
    category: "specialty",
    title: "Tire Recycling",
    h1: "Tire Recycling & Removal",
    metaTitle: "Tire Recycling & Removal | U.S. Carting",
    metaDescription:
      "Car, truck, and trailer tires recycled — including those that aren't accepted at curbside.",
    intro:
      "Tires don't go in the trash and most transfer stations charge a fee per tire. We bundle them up and take them to a recycler.",
    whatsIncluded: [
      "Loading and removal",
      "Recycling routing",
      "Volume pricing for shops",
    ],
    items: [
      "Passenger car tires",
      "Truck and SUV tires",
      "Trailer and tractor tires",
      "Rims (optional)",
    ],
    relatedSlugs: ["junk-removal", "garage-cleanout"],
  },
  {
    slug: "office-cleanout",
    category: "commercial",
    title: "Office Clean-Out & Breakdown",
    h1: "Office Clean-Out & Furniture Breakdown",
    metaTitle: "Office Clean-Out & Cubicle Breakdown | U.S. Carting",
    metaDescription:
      "Move-out, downsize, or close-down — we break down cubicles, haul desks, recycle e-waste, and leave the suite broom-swept.",
    intro:
      "Closing a suite or downsizing the floor? We break down cubicles, haul desks and credenzas, recycle the e-waste, and get the space ready for the landlord walk-through.",
    whatsIncluded: [
      "Off-hours scheduling for occupied buildings",
      "COI on file with your property manager",
      "E-waste recycling included",
      "Donation drop-offs for in-good-shape furniture",
    ],
    items: [
      "Cubicle breakdown and removal",
      "Workstations and desks",
      "Conference room tables",
      "File cabinets",
      "Office chairs",
      "Server room decommissioning",
    ],
    relatedSlugs: ["e-waste-recycling", "junk-removal", "renovation-cleanup"],
  },
  {
    slug: "renovation-cleanup",
    category: "demolition",
    title: "Renovation & Restoration Cleanup",
    h1: "Renovation & Restoration Cleanup",
    metaTitle: "Renovation & Restoration Cleanup | U.S. Carting",
    metaDescription:
      "End-of-job cleanup for general contractors and homeowners — debris, materials, and one-time grunt-work hauls.",
    intro:
      "Punch-list-ready cleanup at the end of a renovation. We sweep, we pull material, we haul the leftover demo, and we get the property handover-ready.",
    whatsIncluded: [
      "Punch-list cleanup",
      "Material removal",
      "Final debris haul",
      "Broom-sweep finish",
    ],
    items: [
      "Leftover lumber and drywall",
      "Empty paint cans (dried)",
      "Packing materials",
      "Floor protection removal",
    ],
    relatedSlugs: ["construction-debris-removal", "light-demolition", "office-cleanout"],
  },
  {
    slug: "grizzly-bags",
    category: "specialty",
    title: "Grizzly Bags — Dumpster Bag Service",
    h1: "Grizzly Bags — Dumpster Bags With No Rental Period",
    metaTitle: "Grizzly Bags — Dumpster Bag Service | U.S. Carting",
    metaDescription:
      "Lightweight, durable dumpster bags for small projects. Buy it, bag it, we'll grab it — no rental clock.",
    intro:
      "When a roll-off is more than you need, Grizzly Bags fill the gap. Buy the bag, fill it on your schedule, then email us when you're ready and we'll grab it. No rental clock. No daily fees.",
    whatsIncluded: [
      "Durable, lightweight bag",
      "No rental period — fill on your timeline",
      "Pickup on request",
      "Great for tight driveways",
    ],
    items: [
      "Small home projects",
      "Light demolition (drywall, fixtures, tile)",
      "Yard cleanup",
      "Garage purges",
    ],
    relatedSlugs: ["roll-off-dumpster-rental", "junk-removal"],
  },
  {
    slug: "hotel-cleanouts",
    category: "commercial",
    title: "Hotel & Multi-Unit Clean-Outs",
    h1: "Hotel & Multi-Unit Clean-Outs",
    metaTitle: "Hotel & Multi-Family Clean-Out Service | U.S. Carting",
    metaDescription:
      "Mattress turnovers, refresh cycles, and unit-by-unit clean-outs for hotels and multi-family properties.",
    intro:
      "Refresh cycles, mattress turnovers, and tenant move-outs — we run high-volume jobs without slowing the property down. Off-hours scheduling and COIs on file with the property manager.",
    whatsIncluded: [
      "Volume-priced mattress turnovers",
      "Off-hours scheduling",
      "COI on file",
      "Unit-by-unit clean-out coordination",
    ],
    items: [
      "Mattress and box-spring removal",
      "Unit furniture turnovers",
      "Refresh-cycle debris",
      "Tenant abandonment clean-outs",
    ],
    relatedSlugs: ["mattress-removal", "office-cleanout", "estate-cleanouts"],
  },
];

export const SERVICE_CATEGORIES: Record<ServiceItem["category"], string> = {
  rental: "Dumpster Rentals",
  junk: "Junk Removal",
  cleanout: "Clean-Outs",
  demolition: "Demolition & Construction",
  specialty: "Specialty Items",
  commercial: "Commercial",
};
