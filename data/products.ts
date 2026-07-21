export interface ProductHighlight {
  title: string;
  description: string;
}

export interface Product {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  highlights: ProductHighlight[];
  featureList: string[];
}

export const products: Product[] = [
  {
    slug: "insight",
    name: "MAKKN Insight",
    category: "Call Intelligence",
    tagline:
      "MAKKN Insight automatically turns every sales and support call into a transcript, a summary, a score, and a clear next action.",
    highlights: [
      {
        title: "Live Call Transcription",
        description:
          "Every call is transcribed in real time in Arabic and English, capturing the full conversation accurately so nothing said on a call is ever lost or left to memory.",
      },
      {
        title: "Automatic Call Summarization",
        description:
          "Long calls are condensed into concise, structured summaries highlighting the customer's need, objections raised, and outcome, so managers can review a call in seconds instead of minutes.",
      },
      {
        title: "Sentiment Analysis",
        description:
          "Each conversation is analyzed for customer tone and satisfaction, flagging frustration or dissatisfaction early so issues can be addressed before they escalate.",
      },
      {
        title: "Call & Lead Scoring",
        description:
          "Calls are automatically scored against your sales or support criteria, ranking leads by quality and agents by performance so your best opportunities and coaching needs surface immediately.",
      },
      {
        title: "Recommended Actions & Coaching Insights",
        description:
          "Based on what happened in the call, MAKKN Insight suggests the next best action for the agent and personalized coaching tips for managers, turning every call into a training opportunity.",
      },
    ],
    featureList: [
      "Real-time Arabic & English transcription",
      "Automatic call summarization",
      "Sentiment & emotion detection",
      "Lead & call quality scoring",
      "Personalized agent coaching tips",
      "Objection & keyword detection",
      "Call outcome tagging",
      "Team performance dashboard",
      "CRM integration & auto-logging",
      "Searchable call archive",
    ],
  },
  {
    slug: "desk",
    name: "MAKKN Desk",
    category: "AI Support Agent",
    tagline:
      "MAKKN Desk is an AI support agent trained on your business, ready to answer, resolve, and act across every channel your customers use.",
    highlights: [
      {
        title: "Multi-Channel Deployment",
        description:
          "Deploy the same AI agent across WhatsApp, your website, and social media channels from a single configuration, so customers get consistent answers no matter where they reach out.",
      },
      {
        title: "Knowledge Retrieval",
        description:
          "Train the agent on your own manuals, FAQs, policies, and product data, so it answers with information specific to your business rather than generic responses.",
      },
      {
        title: "Human Agent Escalation",
        description:
          "When a query is too complex or a customer asks directly, the agent hands off seamlessly to a human agent with full conversation context attached.",
      },
      {
        title: "Workflow & Actions Configuration",
        description:
          "Configure the agent to do more than talk, check order status, book appointments, update records, or trigger a workflow, all without writing code.",
      },
      {
        title: "Widget Customization",
        description:
          "Match the chat widget to your brand, colors, logo, greeting message, and position, so it feels like a native part of your website or app.",
      },
    ],
    featureList: [
      "WhatsApp, website & social media integration",
      "Trained on your documents & knowledge base",
      "Persistent conversation memory",
      "Seamless human agent handoff",
      "Custom actions & workflow automation",
      "Fully customizable widget branding",
      "Multi-language support (Arabic & English)",
      "Analytics on conversations & resolution rate",
      "Self-learning FAQ suggestions",
      "CRM/helpdesk integration",
    ],
  },
  {
    slug: "guard",
    name: "MAKKN Guard",
    category: "Site Safety Monitoring",
    tagline:
      "MAKKN Guard watches over your facility so your safety team doesn't have to be everywhere at once.",
    highlights: [
      {
        title: "Smart Detection System",
        description:
          "Uses computer vision on your existing camera feeds to automatically detect safety violations in real time, from missing PPE to unauthorized zone entry, without needing new hardware.",
      },
      {
        title: "Violation Notification System",
        description:
          "The moment a violation is detected, the right person is notified instantly via the channel you choose, so incidents are addressed within minutes, not at the end of a shift.",
      },
      {
        title: "Configurable Safety Requirements",
        description:
          "Define exactly which safety equipment and rules apply to each zone or camera, so the system reflects your actual site policies rather than a one-size-fits-all standard.",
      },
      {
        title: "Face Recognition",
        description:
          "Identify individuals involved in a violation for accurate incident logging and targeted coaching, while keeping access and privacy controls in your hands.",
      },
      {
        title: "Dashboard & Insights",
        description:
          "A live dashboard shows every incident, trend, and hotspot across your facility, turning raw camera footage into safety metrics you can act on.",
      },
    ],
    featureList: [
      "Real-time PPE compliance detection (helmets, gloves, boots)",
      "Restricted zone & pedestrian walkway monitoring",
      "Forklift speed detection",
      "Pressure gauge monitoring",
      "Instant violation alerts (SMS/email/WhatsApp)",
      "Per-zone configurable safety rules",
      "Face recognition for incident logging",
      "Live incident dashboard",
      "Historical trend & heatmap analytics",
      "Exportable compliance reports",
    ],
  },
  {
    slug: "docs",
    name: "MAKKN Docs",
    category: "Document Automation",
    tagline:
      "MAKKN Docs reads, understands, and organizes your documents automatically, turning paper and scans into searchable, validated data.",
    highlights: [
      {
        title: "Automated Document Scanning & Extraction",
        description:
          "Upload scanned documents, PDFs, or images and MAKKN Docs automatically extracts the relevant data fields, eliminating manual data entry.",
      },
      {
        title: "Data Validation & Flagging",
        description:
          "Extracted data is automatically checked against your rules, flagging missing fields, inconsistencies, or errors for review before they become a downstream problem.",
      },
      {
        title: "Intelligent Search & Retrieval",
        description:
          "Instantly find any document or specific piece of information across thousands of scanned files using natural language search, instead of manually searching through folders.",
      },
      {
        title: "Document Classification",
        description:
          "Documents are automatically sorted and tagged by type, invoices, contracts, IDs, forms, keeping your archive organized without manual filing.",
      },
      {
        title: "Seamless System Integration",
        description:
          "Validated data flows directly into your existing systems, ERP, CRM, or databases, closing the loop from scanned paper to structured, usable data.",
      },
    ],
    featureList: [
      "OCR-based document scanning",
      "Automatic field & data extraction",
      "Rule-based validation & error flagging",
      "Natural language document search",
      "Automatic document classification & tagging",
      "Multi-format support (PDF, image, scanned copies)",
      "Arabic & English document processing",
      "Audit trail & version history",
      "ERP/CRM/database integration",
      "Bulk document processing",
    ],
  },
];
