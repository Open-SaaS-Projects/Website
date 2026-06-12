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
  heroDescription: string;
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
    subtitle: "Transform Property Management with Intelligent Automation",
    heroDescription:
      "Streamline operations, enhance customer experiences, and unlock data-driven insights across your real estate portfolio with AI-powered solutions designed for the modern property market.",
    icon: "Building2",
    challenges: [
      {
        title: "Manual Document Processing",
        description:
          "Property documents, contracts, and leases require hours of manual review, delaying transactions and increasing error rates.",
      },
      {
        title: "Inefficient Lead Management",
        description:
          "Sales teams struggle to qualify and prioritize leads effectively, leading to missed opportunities and wasted resources.",
      },
      {
        title: "Limited Property Insights",
        description:
          "Fragmented data across systems makes it difficult to analyze market trends, occupancy rates, and property performance.",
      },
    ],
    solutions: [
      {
        title: "Data Intelligence",
        description:
          "Consolidate property data, occupancy metrics, and market trends into unified dashboards for real-time decision-making and performance tracking.",
        icon: "BarChart3",
      },
      {
        title: "Document Intelligence",
        description:
          "Automate contract review, lease extraction, and compliance verification to accelerate transactions and reduce legal risks.",
        icon: "FileText",
      },
      {
        title: "Customer Support Intelligence",
        description:
          "Deploy AI-powered chatbots to handle property inquiries, schedule viewings, and resolve tenant issues 24/7 across multiple channels.",
        icon: "MessageSquare",
      },
      {
        title: "Recommendation Engine",
        description:
          "Deliver personalized property suggestions to buyers and renters based on preferences, behavior, and budget, increasing conversion rates.",
        icon: "TrendingUp",
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
    subtitle: "Elevate Shopping Experiences with Personalized Intelligence",
    heroDescription:
      "Drive sales, optimize inventory, and deliver hyper-personalized customer journeys with AI solutions that understand shopper behavior and market dynamics in real time.",
    icon: "ShoppingCart",
    challenges: [
      {
        title: "Generic Customer Experiences",
        description:
          "One-size-fits-all product recommendations fail to engage shoppers, leading to low conversion rates and high cart abandonment.",
      },
      {
        title: "Overwhelmed Support Teams",
        description:
          "Customer inquiries about products, orders, and returns flood support channels, delaying responses and frustrating customers.",
      },
      {
        title: "Ineffective Marketing Campaigns",
        description:
          "Marketing teams struggle to segment audiences and personalize outreach, resulting in poor ROI and wasted ad spend.",
      },
    ],
    solutions: [
      {
        title: "Recommendation Engine",
        description:
          "Analyze browsing patterns, purchase history, and preferences to deliver real-time product suggestions that boost sales and customer satisfaction.",
        icon: "TrendingUp",
      },
      {
        title: "Growth Intelligence",
        description:
          "Automate lead scoring, segment customers dynamically, and launch multi-channel campaigns that drive conversions and customer loyalty.",
        icon: "Zap",
      },
      {
        title: "Customer Support Intelligence",
        description:
          "Provide instant, AI-powered responses to product questions, order tracking, and return requests via chat, email, and social media.",
        icon: "MessageSquare",
      },
      {
        title: "Data Intelligence",
        description:
          "Unify sales, inventory, and customer data into comprehensive dashboards for forecasting, trend analysis, and operational optimization.",
        icon: "BarChart3",
      },
    ],
    benefits: [
      {
        stat: "35%",
        label: "Increase in Average Order Value",
      },
      {
        stat: "50%",
        label: "Reduction in Cart Abandonment",
      },
      {
        stat: "70%",
        label: "Faster Customer Support Resolution",
      },
      {
        stat: "3x",
        label: "Improvement in Marketing ROI",
      },
    ],
  },
  {
    id: "healthcare",
    slug: "ai-for-healthcare",
    title: "AI for Healthcare",
    subtitle: "Enhance Patient Care with Intelligent Automation",
    heroDescription:
      "Improve clinical outcomes, streamline administrative workflows, and unlock insights from medical data with AI solutions built for healthcare providers, hospitals, and clinics.",
    icon: "HeartPulse",
    challenges: [
      {
        title: "Manual Medical Record Management",
        description:
          "Healthcare providers spend hours reviewing, categorizing, and extracting data from medical records, slowing down patient care and increasing administrative burden.",
      },
      {
        title: "Inefficient Staff Recruitment",
        description:
          "Hospitals and clinics struggle to hire qualified medical professionals quickly, facing lengthy recruitment cycles and talent shortages.",
      },
      {
        title: "Fragmented Patient Data",
        description:
          "Medical records, lab results, and patient histories exist across disconnected systems, preventing holistic patient care and accurate diagnoses.",
      },
    ],
    solutions: [
      {
        title: "Document Intelligence",
        description:
          "Automate extraction and classification of patient records, lab reports, and prescriptions to accelerate clinical workflows and reduce errors.",
        icon: "FileText",
      },
      {
        title: "Data Structuring Engine",
        description:
          "Transform unstructured medical data into structured formats for seamless integration with EHR systems and analytics platforms.",
        icon: "Database",
      },
      {
        title: "AI Talent Assistant",
        description:
          "Accelerate hiring of doctors, nurses, and support staff with automated resume screening, skills matching, and interview scheduling.",
        icon: "Users",
      },
      {
        title: "Data Intelligence",
        description:
          "Analyze patient outcomes, treatment effectiveness, and operational metrics to improve care quality and optimize hospital resources.",
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
    subtitle: "Optimize Production with Data-Driven Intelligence",
    heroDescription:
      "Increase operational efficiency, reduce downtime, and accelerate growth with AI solutions that transform manufacturing data into actionable insights and automated workflows.",
    icon: "Factory",
    challenges: [
      {
        title: "Unstructured Production Data",
        description:
          "Manufacturing data from sensors, machines, and reports remains unorganized, making it impossible to identify inefficiencies and optimize processes.",
      },
      {
        title: "Limited Operational Visibility",
        description:
          "Factory managers lack real-time dashboards to monitor production, quality control, and equipment performance, leading to reactive decision-making.",
      },
      {
        title: "Inefficient Sales & Marketing",
        description:
          "Sales teams struggle to generate qualified leads and nurture relationships with distributors and partners, limiting business growth.",
      },
    ],
    solutions: [
      {
        title: "Data Intelligence",
        description:
          "Consolidate production metrics, quality data, and supply chain information into unified dashboards for real-time monitoring and predictive maintenance.",
        icon: "BarChart3",
      },
      {
        title: "Data Structuring Engine",
        description:
          "Transform raw sensor data, machine logs, and reports into structured formats for seamless analysis and system integration.",
        icon: "Database",
      },
      {
        title: "Growth Intelligence",
        description:
          "Automate lead generation, scoring, and multi-channel outreach to distributors and partners, accelerating sales cycles and market expansion.",
        icon: "Zap",
      },
      {
        title: "Customer Support Intelligence",
        description:
          "Deploy AI assistants to handle product inquiries, order tracking, and technical support requests instantly across all communication channels.",
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
