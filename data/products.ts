export interface ProductHighlight {
  title: string;
  description: string;
  image?: string;
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
        image: "/Desk/Multi-Channel Deployment.jpg",
      },
      {
        title: "Knowledge Retrieval",
        description:
          "Train the agent on your own manuals, FAQs, policies, and product data, so it answers with information specific to your business rather than generic responses.",
        image: "/Desk/Knowledge Retrieval.jpg",
      },
      {
        title: "Human Agent Escalation",
        description:
          "When a query is too complex or a customer asks directly, the agent hands off seamlessly to a human agent with full conversation context attached.",
        image: "/Desk/Human-Agent Escalation.jpg",
      },
      {
        title: "Workflow & Actions Configuration",
        description:
          "Configure the agent to do more than talk, check order status, book appointments, update records, or trigger a workflow, all without writing code.",
        image: "/Desk/Workflow and action configuraiton.png",
      },
      {
        title: "Widget Customization",
        description:
          "Match the chat widget to your brand, colors, logo, greeting message, and position, so it feels like a native part of your website or app.",
        image: "/Desk/Widget Editor.jpg",
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
        image: "/Docs/Auto Document scan.png",
      },
      {
        title: "Data Validation & Flagging",
        description:
          "Extracted data is automatically checked against your rules, flagging missing fields, inconsistencies, or errors for review before they become a downstream problem.",
        image: "/Docs/Data valid..png",
      },
      {
        title: "Intelligent Search & Retrieval",
        description:
          "Instantly find any document or specific piece of information across thousands of scanned files using natural language search, instead of manually searching through folders.",
        image: "/Docs/Intelligent Search.png",
      },
      {
        title: "Document Classification",
        description:
          "Documents are automatically sorted and tagged by type, invoices, contracts, IDs, forms, keeping your archive organized without manual filing.",
        image: "/Docs/Doc Classification.jpg",
      },
      {
        title: "Seamless System Integration",
        description:
          "Validated data flows directly into your existing systems, ERP, CRM, or databases, closing the loop from scanned paper to structured, usable data.",
        image: "/Docs/Integration.png",
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
        image: "/Insights/Transcriptions.jpg",
      },
      {
        title: "Automatic Call Summarization",
        description:
          "Long calls are condensed into concise, structured summaries highlighting the customer's need, objections raised, and outcome, so managers can review a call in seconds instead of minutes.",
        image: "/Insights/Summary.jpg",
      },
      {
        title: "Sentiment Analysis",
        description:
          "Each conversation is analyzed for customer tone and satisfaction, flagging frustration or dissatisfaction early so issues can be addressed before they escalate.",
        image: "/Insights/Sentiment.jpg",
      },
      {
        title: "Call & Lead Scoring",
        description:
          "Calls are automatically scored against your sales or support criteria, ranking leads by quality and agents by performance so your best opportunities and coaching needs surface immediately.",
        image: "/Insights/Lead Scoring.jpg",
      },
      {
        title: "Recommended Actions & Coaching Insights",
        description:
          "Based on what happened in the call, MAKKN Insight suggests the next best action for the agent and personalized coaching tips for managers, turning every call into a training opportunity.",
        image: "/Insights/Actions.jpg",
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
        image: "/Guard/Smart Detection System.png",
      },
      {
        title: "Violation Notification System",
        description:
          "The moment a violation is detected, the right person is notified instantly via the channel you choose, so incidents are addressed within minutes, not at the end of a shift.",
        image: "/Guard/Violation Notification System.jpg",
      },
      {
        title: "Configurable Safety Requirements",
        description:
          "Define exactly which safety equipment and rules apply to each zone or camera, so the system reflects your actual site policies rather than a one-size-fits-all standard.",
        image: "/Guard/Configurable Safety Requirements.jpg",
      },
      {
        title: "Face Recognition",
        description:
          "Identify individuals involved in a violation for accurate incident logging and targeted coaching, while keeping access and privacy controls in your hands.",
        image: "/Guard/Face Recognition.jpg",
      },
      {
        title: "Dashboard & Insights",
        description:
          "A live dashboard shows every incident, trend, and hotspot across your facility, turning raw camera footage into safety metrics you can act on.",
        image: "/Guard/Dashboard by zone.png",
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
];
