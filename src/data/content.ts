export const profile = {
  name: "Joshua Ndeule",
  brand: "JN",
  roles: [
    "Software Engineer",
    "Full-Stack Developer",
    "Network & Cybersecurity Enthusiast",
    "ICT Specialist",
  ],
  location: "Lilongwe, Malawi",
  email: "joshndeule@gmail.com",
  phone: "+265 882 065 532",
  whatsapp: "https://wa.me/265882065532",
  resumeUrl: "/resume.pdf",
  bio: "I build scalable full-stack applications with clean, maintainable architecture — and I bring the same rigor to analyzing modern network infrastructure. My work sits at the intersection of software engineering and network & security fundamentals, from REST APIs and relational schemas to Cisco topologies and defensive best practices.",
  about: [
    "I'm an ICT professional based in Lilongwe, Malawi, currently completing a BSc in Information and Communication Technology at Mzuzu University. My path into tech started with curiosity about how networks move data reliably, and grew into a passion for building the software that runs on top of them.",
    "Day to day, I design and ship full-stack web applications — from schema design in PostgreSQL and MySQL to REST APIs in NestJS and interactive frontends in Next.js and React. I care about clean database architecture, predictable APIs, and interfaces that feel fast and intentional.",
    "On the networking and security side, I work with Cisco technologies and packet-level analysis to understand how infrastructure behaves under real conditions, and I apply cybersecurity fundamentals to keep the systems I build resilient by default.",
  ],
} as const;

export const socials = {
  github: "https://github.com/joshndeule",
  linkedin: "https://linkedin.com/in/joshndeule",
  twitter: "https://x.com/joshndeule",
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
] as const;

export type SkillCategory = {
  title: string;
  accent: "cyan" | "emerald";
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    accent: "cyan",
    skills: ["TypeScript", "JavaScript", "PHP", "SQL"],
  },
  {
    title: "Frontend",
    accent: "cyan",
    skills: ["Next.js", "React", "Tailwind CSS", "Three.js"],
  },
  {
    title: "Backend & Databases",
    accent: "cyan",
    skills: ["NestJS", "PostgreSQL", "MySQL"],
  },
  {
    title: "Networking & Security",
    accent: "emerald",
    skills: ["Cisco Networking", "Cisco Packet Tracer", "Cyber Security Fundamentals"],
  },
  {
    title: "Tools & Version Control",
    accent: "emerald",
    skills: ["Git", "GitHub", "Linux Environments"],
  },
];

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  status: string;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Full Stack Developer Intern",
    company: "INFI-TECH",
    period: "Present",
    status: "Current",
    highlights: [
      "Engineering robust web applications and REST APIs using Next.js, NestJS, and TypeScript.",
      "Architecting database schemas in PostgreSQL/MySQL and optimizing query execution times.",
      "Utilizing Git/GitHub workflows in team environments and deploying modular features.",
    ],
  },
];

export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
};

export const education: EducationItem[] = [
  {
    degree: "Bachelor of Science in ICT",
    institution: "Mzuzu University",
    period: "2021 – 2026",
  },
  {
    degree: "Malawi School Certificate of Education (MSCE)",
    institution: "James Chiona Catholic High School & Kings Foundation",
    period: "2016 – 2021",
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Full-Stack Client Portal",
    description:
      "A modular web application with authenticated dashboards, RESTful APIs, and a relational schema built for scale.",
    tags: ["Full-Stack Web App"],
    tech: ["Next.js", "NestJS", "PostgreSQL", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "3D Network Node Visualizer",
    description:
      "An interactive 3D platform that renders network topologies as explorable node graphs in the browser.",
    tags: ["3D Interactive Platform"],
    tech: ["React", "Three.js", "@react-three/fiber"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Campus Network Topology Design",
    description:
      "A simulated multi-VLAN campus network built and validated in Cisco Packet Tracer, covering routing, segmentation, and access control.",
    tags: ["Network Topology Architecture"],
    tech: ["Cisco Packet Tracer", "VLANs", "Routing & Switching"],
    githubUrl: "#",
  },
];

export type Certification = {
  title: string;
  issuer: string;
  status: "Upcoming" | "In Progress" | "Completed";
  verifyUrl?: string;
};

export const certifications: Certification[] = [
  {
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    status: "Completed",
  },
  {
    title: "Network Security",
    issuer: "Cisco Networking Academy",
    status: "Completed",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    status: "Completed",
  },
  {
    title: "Exploring Networking with Cisco Packet Tracer",
    issuer: "Cisco Networking Academy",
    status: "Completed",
  },
  {
    title: "Computer Hardware Basics",
    issuer: "Cisco Networking Academy",
    status: "Completed",
  },
  {
    title: "CSS Essentials",
    issuer: "Cisco Networking Academy",
    status: "Completed",
  },
  {
    title: "Career Essentials in Software Development",
    issuer: "Microsoft & LinkedIn",
    status: "Completed",
  },
  {
    title: "Career Essentials in Cybersecurity",
    issuer: "Microsoft & LinkedIn",
    status: "Completed",
  },
];
