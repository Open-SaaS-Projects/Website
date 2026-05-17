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
];

export const activeJobs = jobs.filter((j) => j.status === "active");
