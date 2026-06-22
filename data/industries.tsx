export interface IndustrySolution {
  title: string;
  description: string;
  icon: string; // Lucide icon name
}

export interface IndustryChallenge {
  title: string;
  description: string;
}

export interface IndustryBenefit {
  stat: string;
  label: string;
}

export interface Industry {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  icon: string; // Lucide icon name
  challenges: IndustryChallenge[];
  solutions: IndustrySolution[];
  benefits: IndustryBenefit[];
}

export const industries: Industry[] = [
  {
    id: "real-estate",
    slug: "ai-for-real-estate",
    title: "AI for Real Estate",
    subtitle:
      "We don't build a one-size-fits-all product. We study how your industry operates, then configure our AI layer around your workflows, your language, and your data.",
    icon: "Building2",
    challenges: [
      {
        title: "Telesales teams are calling the wrong leads",
        description:
          "Large databases with no scoring—agents spend equal time on cold prospects and hot buyers. No way to tell who's ready to buy until they've already gone to a competitor.",
      },
      {
        title: "Inbound leads arriving unqualified",
        description:
          "Campaigns generate volume, not quality; sales managers have no way to prioritise before the call is made. High cost-per-qualified-lead.",
      },
      {
        title: "Sales call intelligence is zero",
        description:
          "Hundreds of telesales calls happen daily, but no one is analysing what's working, what objections are common, or which agents need coaching. Improvement is guesswork.",
      },
      {
        title: "Contracts and documents are handled manually",
        description:
          "Lease agreements, title deeds, inspection reports scattered across emails and folders—no audit trail, missed renewal dates, and compliance risk under regulatory requirements.",
      },
    ],
    solutions: [
      {
        title: "Score leads before your team picks up the phone",
        description:
          "Scores and ranks both inbound and database leads by purchase likelihood. Analyses telesales calls in Arabic to surface winning patterns, common objections, and coaching opportunities. Generates targeted campaigns for specific buyer profiles.",
        icon: "TrendingUp",
      },
      {
        title: "Extract, validate, and track every contract automatically",
        description:
          "Arabic and English lease documents processed via OCR and extraction—key dates, clauses, and obligations flagged automatically. Full audit trail. Nothing missed, nothing expired.",
        icon: "FileText",
      },
      {
        title: "Arabic-native tenant & buyer support",
        description:
          "Handles payment queries, maintenance requests, and property FAQs via voice or text in Arabic. Logs every interaction. Frees your team to focus on deals, not admin.",
        icon: "MessageSquare",
      },
    ],
    benefits: [
      {
        stat: "60%",
        label: "Faster Contract Processing",
      },
      {
        stat: "40%",
        label: "Increase in Lead Conversion",
      },
      {
        stat: "50%",
        label: "Reduction in Support Costs",
      },
      {
        stat: "24/7",
        label: "Automated Customer Service",
      },
    ],
  },
  {
    id: "retail-ecommerce",
    slug: "ai-for-retail-ecommerce",
    title: "AI for Retail & E-Commerce",
    subtitle:
      "We don't build a one-size-fits-all product. We study how your industry operates, then configure our AI layer around your workflows, your language, and your data.",
    icon: "ShoppingCart",
    challenges: [
      {
        title: "Support teams drowning in repetitive tickets",
        description:
          "Order status, return policy, delivery delays—the same questions are answered 40+ times a day, in Arabic and English, by agents who should be handling exceptions.",
      },
      {
        title: "No Arabic-native support coverage",
        description:
          "Global chatbot tools are English-first; customers get broken Arabic or are frustrated with unnatural responses, hurting CSAT scores.",
      },
      {
        title: "Generic product recommendations are losing revenue",
        description:
          '"Customers also bought" logic built on global behavioral doesn\'t reflect purchasing patterns, seasonal demand, or local price sensitivity.',
      },
      {
        title: "Data sitting in silos, decisions made on instinct",
        description:
          "Sales data in one system, inventory in another, customer behavior in a third—ops managers can't get a single view without waiting for reports that are already stale.",
      },
    ],
    solutions: [
      {
        title: "Arabic & voice-native support agent",
        description:
          "Trained on your policies, your catalogue, and your tone—handles Arabic voice and text queries 24/7. Escalates only what needs a human. Avg. ticket deflection: 60–70%.",
        icon: "MessageSquare",
      },
      {
        title: "Personalisation built on your customers' behaviour",
        description:
          "Not a generic algorithm—trained on your transaction data. Surfaces the right product, to the right customer, at the right moment. Adapts to local demand patterns automatically.",
        icon: "TrendingUp",
      },
      {
        title: "One view of your entire operation",
        description:
          "Connects your sales, inventory, and customer data into a single queryable layer. Ask questions in plain language, get answers—not spreadsheets. Forecast demand before the stock runs out.",
        icon: "BarChart3",
      },
    ],
    benefits: [
      {
        stat: "60-70%",
        label: "Avg. Ticket Deflection",
      },
      {
        stat: "24/7",
        label: "Arabic Voice & Text Support",
      },
      {
        stat: "1x",
        label: "Unified Operational View",
      },
      {
        stat: "Auto",
        label: "Demand Forecasting",
      },
    ],
  },
  {
    id: "healthcare",
    slug: "ai-for-healthcare",
    title: "AI for Healthcare",
    subtitle:
      "We don't build a one-size-fits-all product. We study how your industry operates, then configure our AI layer around your workflows, your language, and your data.",
    icon: "HeartPulse",
    challenges: [
      {
        title: "Patient inquiry overload on reception teams",
        description:
          "Appointment bookings, doctor availability, and insurance coverage questions are all handled manually by front desk staff via phone and WhatsApp. Reception teams spend more time answering calls than managing the clinic.",
      },
      {
        title: "Insurance claims processed by hand",
        description:
          "Hospital insurance submissions involve stacks of paper forms, manual data entry, and repeated follow-up with insurers. Errors cause rejections and payment delays that hit cash flow directly.",
      },
      {
        title: "Patient records and documents are unstructured",
        description:
          "Medical histories, referral letters, lab results, and consent forms exist across paper files, scanned PDFs, and disconnected systems, making it impossible to retrieve them quickly when a patient arrives.",
      },
      {
        title: "No visibility into operational performance",
        description:
          "Patient volume, appointment no-show rates, revenue per department, and staff utilisation are tracked in spreadsheets. Decisions made on gut feel rather than data across multi-branch clinic groups.",
      },
    ],
    solutions: [
      {
        title: "Arabic voice & text agent for patient-facing ops",
        description:
          "Handles appointment bookings, doctor availability queries, directions, and insurance FAQs in Arabic via phone, WhatsApp, or web. Reception staff focus on patients in front of them, not the queue on hold.",
        icon: "MessageSquare",
      },
      {
        title: "Extract and validate insurance claims and patient documents",
        description:
          "OCR and extraction across Arabic and English medical documents—insurance forms are auto-extracted and validated before submission, reducing rejection rates. Patient records made searchable and retrievable in seconds.",
        icon: "FileText",
      },
      {
        title: "Operational dashboards across all branches",
        description:
          "Connects appointment, billing, and patient flow data into one layer. Multi-branch clinic groups get a single view—no-show rates, revenue per department, and peak hours are queryable in plain Arabic or English.",
        icon: "BarChart3",
      },
    ],
    benefits: [
      {
        stat: "45%",
        label: "Reduction in Admin Time",
      },
      {
        stat: "60%",
        label: "Faster Record Processing",
      },
      {
        stat: "50%",
        label: "Quicker Staff Onboarding",
      },
      {
        stat: "30%",
        label: "Improvement in Care Quality",
      },
    ],
  },
  {
    id: "manufacturing",
    slug: "ai-for-manufacturing",
    title: "AI for Manufacturing",
    subtitle:
      "We don't build a one-size-fits-all product. We study how your industry operates, then configure our AI layer around your workflows, your language, and your data.",
    icon: "Factory",
    challenges: [
      {
        title: "Workers can't find the right procedure fast enough",
        description:
          "SOPs, manuals, and safety docs exist but are scattered, versioned inconsistently, and mostly in formats no one can search. Errors happen because people rely on memory instead.",
      },
      {
        title: "Supplier and procurement data live in an email",
        description:
          "Quotes, purchase orders, and delivery confirmations are exchanged over email—no extraction, no comparison, no flagging when a delivery is late or a price has changed.",
      },
      {
        title: "Quality reporting is always a step behind",
        description:
          "Defect logs and inspection reports are filled out manually—patterns only visible in hindsight, after production has moved on and rework costs have already hit.",
      },
      {
        title: "No single view of production performance",
        description:
          "Output, downtime, defect rate, and supplier performance are tracked in separate tools or spreadsheets; ops managers spend hours compiling reports instead of acting on them.",
      },
    ],
    solutions: [
      {
        title: "Every SOP and supplier doc is instantly searchable",
        description:
          "OCR and extraction across Arabic and English documents—workers query procedures in plain language, and always get the current version. Procurement docs extracted, compared, and anomalies flagged automatically.",
        icon: "FileText",
      },
      {
        title: "Production visibility without the spreadsheet marathon",
        description:
          "Connects your operational data sources into one layer. Surfaces defect patterns, downtime trends, and supplier performance in real time. Forecasts before problems become costs.",
        icon: "BarChart3",
      },
      {
        title: "Internal knowledge agent for your floor teams",
        description:
          "Workers ask questions in Arabic, get answers from your own SOPs, manuals, and compliance docs instantly. Captures tribal knowledge before it walks out the door with senior staff.",
        icon: "MessageSquare",
      },
    ],
    benefits: [
      {
        stat: "40%",
        label: "Reduction in Downtime",
      },
      {
        stat: "35%",
        label: "Increase in Productivity",
      },
      {
        stat: "55%",
        label: "Faster Issue Resolution",
      },
      {
        stat: "2x",
        label: "Growth in Sales Pipeline",
      },
    ],
  },
];
