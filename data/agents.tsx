import {
  FileText,
  MessageSquare,
  LayoutDashboard,
  Mail,
  BarChart3,
  Database,
  MousePointer,
  Layers,
  Users,
  Search,
  TrendingUp,
  FileCheck,
  Bell,
  Shield,
  Map,
} from "lucide-react";

interface AgentFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Agent {
  name: string;
  title: string;
  description: string;
  path: string;
  features: AgentFeature[];
}

export const agents: Agent[] = [
  {
    name: "Customer Support Automation",
    title: "",
    description:
      "Automate your customer support with AI that understands and resolves issues instantly.",
    path: "/customer-support-agent",
    features: [
      {
        icon: <MessageSquare className="h-8 w-8 text-[#6D2FD5]" />,
        title: "AI Chat & Email Assistant",
        description:
          "Handle repetitive customer queries instantly via chat and email from account issues to FAQ responses.",
      },
      {
        icon: <Layers className="h-8 w-8 text-[#6D2FD5]" />,
        title: "Multichannel Support",
        description:
          "Integrates with chat, email, WhatsApp, and social media to offer consistent support everywhere.",
      },
      {
        icon: <BarChart3 className="h-8 w-8 text-[#6D2FD5]" />,
        title: "Auto-Triage & Routing",
        description:
          "Classifies and routes tickets to the right human agent or department when needed.",
      },
      {
        icon: <BarChart3 className="h-8 w-8 text-[#6D2FD5]" />,
        title: "Sentiment Detection & Routing",
        description:
          "Detects customer tone and urgency to prioritize escalations and de-escalate issues proactively.",
      },
    ],
  },
  {
    name: "AI Talent Assistant",
    title: "",
    description:
      "Automate your hiring to handle high volume, tight deadlines, or complex candidate evaluations.",
    path: "/recruiting-agent",
    features: [
      {
        icon: <FileText className="h-8 w-8 text-[#6D2FD5]" />,
        title: "AI Resume Screening",
        description:
          "Quickly identify top candidates with AI. Automatically screens, scores, and ranks resumes based on job relevance.",
      },
      {
        icon: <MessageSquare className="h-8 w-8 text-[#6D2FD5]" />,
        title: "AI Job Profile",
        description:
          "Generate tailored job descriptions and interview questions instantly in alignment with your hiring goals.",
      },
      {
        icon: <LayoutDashboard className="h-8 w-8 text-[#6D2FD5]" />,
        title: "Candidates Dashboard",
        description:
          "Track, manage, and evaluate applicants from one streamlined dashboard. Send bulk, personalized notifications.",
      },
      {
        icon: <Bell className="h-8 w-8 text-[#6D2FD5]" />,
        title: "Candidate Notification",
        description:
          "Send bulk, personalized notifications to keep candidates informed at every stage ensuring a transparent, timely experience.",
      },
    ],
  },
  {
    name: "Document Intelligence",
    title: "",
    description:
      "Transform unstructured documents and data into organized, actionable insights.",
    path: "/data-structuring-engine",
    features: [
      {
        icon: <FileText className="h-8 w-8 text-[#6D2FD5]" />,
        title: "Intelligent Document Parsing",
        description:
          "Recognizes and categorizes document types. Applies logic based on layout, tone, and content.",
      },
      {
        icon: <Database className="h-8 w-8 text-[#6D2FD5]" />,
        title: "Data Field Extraction & Structuring",
        description:
          "Extracts key fields and converts data into structured formats like JSON, CSV, or database rows.",
      },
      {
        icon: <FileCheck className="h-8 w-8 text-[#6D2FD5]" />,
        title: "Document Validation and Verification",
        description:
          "Ensures that submitted documents (such as IDs, contracts, invoices, or certificates) are authentic and accurate.",
      },
      {
        icon: <Search className="h-8 w-8 text-[#6D2FD5]" />,
        title: "OCR & Visual Layout Analysis",
        description:
          "Reads scanned files, handwritten forms, and PDFs using OCR. Detects tables, sections, and field relationships even in noisy documents.",
      },
    ],
  },
  {
    name: "Data Intelligence",
    title: "",
    description:
      "Transform raw data into actionable insights with automated pipelines, quality monitoring, and intelligent dashboards.",
    path: "/data-intelligence",
    features: [
      {
        icon: <Database className="h-8 w-8 text-[#6D2FD5]" />,
        title: "Automated Data Pipelines",
        description:
          "Seamlessly extract, clean, transform, and load data from multiple sources into your central system.",
      },
      {
        icon: <BarChart3 className="h-8 w-8 text-[#6D2FD5]" />,
        title: "Dynamic Dashboards & Reports",
        description:
          "Generate interactive, role-based dashboards and reports tailored to decision-makers.",
      },
      {
        icon: <Layers className="h-8 w-8 text-[#6D2FD5]" />,
        title: "Integration-Ready Architecture",
        description:
          "Easily integrates with popular databases, cloud platforms, and BI tools like Power BI and Tableau.",
      },
      {
        icon: <Shield className="h-8 w-8 text-[#6D2FD5]" />,
        title: "Data Quality Monitoring",
        description:
          "Detect anomalies, duplicates, and missing values automatically, with real-time alerts and built-in validation rules.",
      },
    ],
  },
  {
    name: "Recommendation Engine",
    title: "",
    description:
      "Personalize every user experience with AI that understands preferences and predicts needs.",
    path: "/recommendation-engine",
    features: [
      {
        icon: <MousePointer className="h-8 w-8 text-[#6D2FD5]" />,
        title: "User Behavior Tracking",
        description:
          "Tracks clicks, searches, purchases, and interactions to understand user preferences.",
      },
      {
        icon: <BarChart3 className="h-8 w-8 text-[#6D2FD5]" />,
        title: "Product/Content Recommendations",
        description:
          "Shows the most relevant items or articles to each user in real time.",
      },
      {
        icon: <Users className="h-8 w-8 text-[#6D2FD5]" />,
        title: "Dynamic Segmentation",
        description:
          "Automatically groups users into behavioral segments for smarter targeting.",
      },
      {
        icon: <Map className="h-8 w-8 text-[#6D2FD5]" />,
        title: "Context-Aware Suggestions",
        description:
          "Tailors recommendations based on time, device, and location.",
      },
    ],
  },
  {
    name: "Growth Intelligence",
    title: "",
    description:
      "Supercharge your marketing and sales efforts with AI that generates, targets, and converts leads.",
    path: "/marketing-sales-agent",
    features: [
      {
        icon: <Mail className="h-8 w-8 text-[#6D2FD5]" />,
        title: "AI Campaign Generator",
        description:
          "Instantly create email, ad, and social content tailored to your audience and tone.",
      },
      {
        icon: <BarChart3 className="h-8 w-8 text-[#6D2FD5]" />,
        title: "Lead Scoring Engine",
        description:
          "Prioritize leads using behavior, engagement, and fit scoring to improve conversions.",
      },
      {
        icon: <TrendingUp className="h-8 w-8 text-[#6D2FD5]" />,
        title: "Multi-Channel Outreach",
        description:
          "Automates email, LinkedIn, and SMS sequences for follow-ups and nurturing.",
      },
      {
        icon: <Database className="h-8 w-8 text-[#6D2FD5]" />,
        title: "CRM Integration",
        description:
          "Syncs with major CRMs (e.g., Salesforce, HubSpot) to streamline lead management and communication.",
      },
    ],
  },
];
