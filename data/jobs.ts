export type JobType = "Full-time" | "Part-time" | "Contract";
export type JobStatus = "active" | "inactive";

export interface Job {
  id: string;
  title: string;
  department: string;
  type: JobType;
  location: string;
  description: string;
  status: JobStatus;
  postedAt: string;
}

// Static placeholder data — replace with DB/Supabase calls once backend is confirmed
export const jobs: Job[] = [
  {
    id: "1",
    title: "Senior AI Engineer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote",
    description:
      "We're looking for a Senior AI Engineer to help design and build intelligent systems that power MAKKN's suite of products. You'll work across the full AI lifecycle — from research and prototyping to production deployment. You'll collaborate closely with product and engineering teams to deliver scalable, reliable AI solutions for enterprise clients across the MENA region.",
    status: "active",
    postedAt: "2025-05-01",
  },
  {
    id: "2",
    title: "Full Stack Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Cairo, Egypt",
    description:
      "Join our engineering team as a Full Stack Developer, building scalable web applications and integrations across MAKKN's product suite. You'll work with Next.js, Node.js, and cloud infrastructure to deliver intuitive, high-performance solutions. Strong experience with TypeScript and REST/GraphQL APIs is required.",
    status: "active",
    postedAt: "2025-05-05",
  },
  {
    id: "3",
    title: "Product Designer",
    department: "Design",
    type: "Contract",
    location: "Cairo, Egypt",
    description:
      "We're seeking a Product Designer to own the end-to-end design process for our AI products. You'll conduct user research, create wireframes and prototypes, and work closely with engineers to ship polished, intuitive experiences. Proficiency in Figma and a strong portfolio of product work is required.",
    status: "inactive",
    postedAt: "2025-04-20",
  },
  {
    id: "4",
    title: "Marketing Manager",
    department: "Marketing",
    type: "Full-time",
    location: "Dubai, UAE",
    description:
      "Lead our digital marketing campaigns and manage the company's brand presence across multiple platforms.",
    status: "active",
    postedAt: "2025-05-10",
  },
  {
    id: "5",
    title: "Data Scientist",
    department: "Engineering",
    type: "Full-time",
    location: "Remote",
    description:
      "Analyze vast amounts of data to find patterns and insights that help us improve our AI models and user experience.",
    status: "active",
    postedAt: "2025-05-12",
  },
  {
    id: "6",
    title: "DevOps Engineer",
    department: "Engineering",
    type: "Full-time",
    location: "Cairo, Egypt",
    description:
      "Manage and optimize our cloud infrastructure, ensuring high availability, security, and scalability of our services.",
    status: "inactive",
    postedAt: "2025-04-15",
  },
  {
    id: "7",
    title: "Sales Executive",
    department: "Sales",
    type: "Full-time",
    location: "Riyadh, KSA",
    description:
      "Drive sales growth in the MENA region by identifying new business opportunities and building relationships with enterprise clients.",
    status: "active",
    postedAt: "2025-05-14",
  },
  {
    id: "8",
    title: "Frontend Developer",
    department: "Engineering",
    type: "Contract",
    location: "Remote",
    description:
      "Build beautiful and responsive user interfaces using React and Tailwind CSS. Ensure cross-browser compatibility and optimize performance.",
    status: "active",
    postedAt: "2025-05-16",
  },
  {
    id: "9",
    title: "Backend Engineer",
    department: "Engineering",
    type: "Full-time",
    location: "Cairo, Egypt",
    description:
      "Design and implement scalable APIs and microservices using Node.js and PostgreSQL. Optimize database queries and improve system performance.",
    status: "inactive",
    postedAt: "2025-03-25",
  },
  {
    id: "10",
    title: "HR Specialist",
    department: "Human Resources",
    type: "Full-time",
    location: "Dubai, UAE",
    description:
      "Manage employee relations, recruitment processes, and support the development of a strong company culture.",
    status: "active",
    postedAt: "2025-05-08",
  },
  {
    id: "11",
    title: "QA Engineer",
    department: "Engineering",
    type: "Part-time",
    location: "Remote",
    description:
      "Ensure the quality of our software products through automated and manual testing. Identify bugs and work with developers to resolve them.",
    status: "active",
    postedAt: "2025-05-11",
  },
  {
    id: "12",
    title: "Content Writer",
    department: "Marketing",
    type: "Contract",
    location: "Remote",
    description:
      "Create engaging content for our blog, social media, and marketing materials. Strong understanding of SEO best practices is required.",
    status: "inactive",
    postedAt: "2025-04-05",
  },
  {
    id: "13",
    title: "Customer Support Specialist",
    department: "Support",
    type: "Full-time",
    location: "Cairo, Egypt",
    description:
      "Provide exceptional support to our users, resolving their issues and helping them get the most out of MAKKN's products.",
    status: "active",
    postedAt: "2025-05-15",
  },
];

export const activeJobs = jobs.filter((j) => j.status === "active");
