// Type definitions
interface Position {
  title: string;
  type: string;
  startDate: string;
  endDate: string;
  location?: string;
  description?: string;
  skills?: string[];
  link?: string;
}

interface Company {
  company: string;
  logo: string;
  positions: Position[];
}

export const profile = {
  name: 'Isala Piyarisi',
  title: 'Observability Engineer',
  tagline: 'eBPF | CKS | CKA | GCP ACE',
  location: 'Sri Lanka',
  email: 'ping@isala.me',
  github: 'https://github.com/isala404',
  twitter: 'https://x.com/isala404',
  linkedin: 'https://linkedin.com/in/isalapiyarisi',

  bio: `I build infrastructure that disappears and observability that tells stories.
Currently exploring the edges of what's possible with eBPF and kernel-level innovation at WSO2.`,

  longBio: `As a passionate and versatile engineer, I've worked across Full Stack Engineering, Data Science, and DevOps. Currently deeply immersed in Kubernetes and its ecosystem, particularly eBPF-based observability.

My journey started at 14, building one of the top 10 COD4 servers worldwide. That curiosity led me through Google Summer of Code at SUSE, speaking at KubeCon, and now leading observability efforts at WSO2.

I'm dedicated to open source and have contributed to projects like Pixie. Proficient in Go, Python, and JavaScript, I love the continuous learning that comes with this field.`,

  topSkills: ['Kubernetes', 'eBPF', 'Go', 'DevOps', 'Observability', 'AI'],
};

export const experience: Company[] = [
  {
    company: 'WSO2',
    logo: '/logos/wso2.svg',
    positions: [
      {
        title: 'Senior Software Engineer',
        type: 'Full-time',
        startDate: 'Feb 2024',
        endDate: 'Present',
        location: 'Colombo, Sri Lanka',
        description: 'Leading observability and eBPF initiatives for WSO2 Choreo platform.',
        skills: ['Kubernetes', 'Observability', 'eBPF', 'Cilium'],
      },
      {
        title: 'Software Engineer',
        type: 'Full-time',
        startDate: 'Jun 2022',
        endDate: 'Feb 2024',
        location: 'Colombo, Sri Lanka',
        description:
          'Conducted research on eBPF-based observability. Led migration from Azure CNI to Cilium on a production cluster with 10,000+ pods while maintaining 99.9% SLA.',
        skills: ['DevOps', 'eBPF', 'Go', 'Kubernetes'],
      },
    ],
  },
  {
    company: 'ThinkSmart Solutions',
    logo: '/logos/thinksmart.svg',
    positions: [
      {
        title: 'Software Engineering Consultant',
        type: 'Part-time',
        startDate: 'Jul 2021',
        endDate: 'Jun 2022',
        description: 'Mentored development team and managed company infrastructure.',
        skills: ['GitOps', 'DevOps', 'Kubernetes'],
      },
      {
        title: 'DevOps Engineer',
        type: 'Full-time',
        startDate: 'Jul 2020',
        endDate: 'Jun 2021',
        description:
          'Introduced GitOps with FluxCD. Migrated legacy storage to GCP (8x faster). Led NodeJS to Go microservices migration.',
        skills: ['Python', 'GitOps', 'Go', 'GCP'],
      },
      {
        title: 'Associate Software Engineer',
        type: 'Part-time',
        startDate: 'Jul 2019',
        endDate: 'Jun 2020',
        description:
          'Reduced infrastructure costs by 50%. Maintained web infrastructure across GCP, AWS, and DigitalOcean.',
        skills: ['Python', 'DevOps', 'React'],
      },
    ],
  },
  {
    company: 'SUSE',
    logo: '/logos/suse.svg',
    positions: [
      {
        title: 'Google Summer of Code Student',
        type: 'Contract',
        startDate: 'Jun 2021',
        endDate: 'Aug 2021',
        description:
          "Built 'Logging Pipeline Plumber' - a Kubernetes operator to debug Banzai Logging pipelines with a React UI bundled for air-gapped systems.",
        skills: ['Go', 'Kubernetes', 'React'],
        link: 'https://github.com/isala404/rancher-logging-pipeline-plumber',
      },
    ],
  },
];

export const education = [
  {
    institution: 'University of Westminster',
    degree: 'Bachelor of Science - BS, Computer Science',
    startDate: 'Sep 2018',
    endDate: 'Jun 2022',
    grade: 'First Class Honours (79.37%)',
    rank: '4th in graduating class',
    highlights: [
      'Presented research at IEEE conference',
      'Thesis: Lightweight framework for automatic root cause analysis in distributed systems',
      'Specialized in Cloud Computing and Machine Learning',
      'Participated in 13 hackathons with top placements',
    ],
  },
];

export const certifications = [
  {
    name: 'CKS: Certified Kubernetes Security Specialist',
    issuer: 'The Linux Foundation',
    date: 'May 2023',
    expires: 'May 2026',
  },
  {
    name: 'CKA: Certified Kubernetes Administrator',
    issuer: 'The Linux Foundation',
    date: 'Mar 2023',
    expires: 'Mar 2026',
  },
  {
    name: 'Associate Cloud Engineer',
    issuer: 'Google Cloud',
    date: 'Jan 2021',
    expires: 'Dec 2026',
  },
];

export const projects = [
  {
    name: 'lazy-koala',
    description: 'eBPF-based AIOps toolkit for Kubernetes observability',
    url: 'https://github.com/isala404/lazy-koala',
    stars: 12,
    tech: ['Go', 'eBPF', 'Kubernetes'],
  },
  {
    name: 'Speculo',
    description: 'Face recognition platform using Deep Convolutional Inverse Graphics Networks',
    url: 'https://github.com/isala404/speculo',
    stars: 8,
    tech: ['Python', 'PyTorch', 'Kubernetes'],
    publication: 'IEEE 2021',
  },
  {
    name: 'FreeIsland',
    description: 'NPC game powered by NLP agents, inspired by Free Guy',
    url: 'https://github.com/isala404/FreeIsland',
    tech: ['Unity', 'Python', 'NLP'],
  },
  {
    name: 'Private Bookmarks',
    description: 'Simple bookmarking tool that accidentally got 1,280+ users',
    tech: ['Go', 'React', 'GCP'],
  },
];

export const speaking = [
  {
    title: 'Scaling Containerized Workloads to Zero with Cilium and eBPF',
    event: 'Cilium + eBPF Day @ KubeCon North America 2024',
    type: 'Conference Talk',
    link: 'https://sched.co/1izss',
  },
  {
    title: 'Scaling Open Source Projects Without Losing Their Soul',
    event: 'KCD Sri Lanka 2024',
    type: 'Conference Talk',
  },
  {
    title: 'eBPF & Cilium',
    event: 'WSO2 Technology Conference 2025',
    type: 'Internal Talk',
    link: 'https://www.youtube.com/watch?v=example',
  },
  {
    title: "Don't use Cilium's default Pod CIDR",
    event: 'KubeFM Podcast',
    type: 'Podcast',
    link: 'https://ku.bz/kJjXQlmTw',
  },
];

export const publications = [
  {
    title: 'Getting Started on Kubernetes observability with eBPF',
    publisher: 'Medium',
    date: 'Aug 2022',
    url: 'https://medium.com/@isalapiyarisi/getting-started-on-kubernetes-observability-with-ebpf-88139eb13fb2',
  },
  {
    title:
      'Speculo: Pattern Recognition with a Deep Convolutional Inverse Graphics Network for Face-Indexing',
    publisher: 'IEEE',
    date: 'Jan 2021',
    url: 'https://ieeexplore.ieee.org/document/9298340',
  },
];

export const nowTiles = [
  {
    id: 'listening',
    icon: 'Headphones',
    label: 'listening to',
    title: 'The Scientist',
    subtitle: 'Coldplay',
    link: 'https://open.spotify.com/track/75JFxkI2RXiU7L9VXzMkle',
  },
  {
    id: 'powered',
    icon: 'Coffee',
    label: 'powered by',
    title: "Brown's Tea",
    subtitle: 'Kahata on repeat',
    link: 'https://brownstea.com/product/browns-kahata/',
  },
  {
    id: 'watching',
    icon: 'Tv',
    label: 'watching',
    title: 'Dr. Stone',
    subtitle: '10 billion percent',
    link: 'https://www.crunchyroll.com/series/GYEXQKJG6/dr-stone',
  },
  {
    id: 'obsessed',
    icon: 'Flame',
    label: 'obsessed with',
    title: 'eBPF',
    subtitle: 'kernel tracing magic',
    link: 'https://ebpf.io',
  },
  {
    id: 'sidequest',
    icon: 'Cpu',
    label: 'side quest',
    title: 'Smart home arc',
    subtitle: 'Pi + mass chaos',
  },
  {
    id: 'setup',
    icon: 'Laptop',
    label: 'setup',
    title: 'macOS + Zed',
    subtitle: 'no mouse gang',
  },
];

export const quotes = [
  {
    text: 'If you want to master something, teach it.',
    author: 'Richard Feynman',
  },
  {
    text: 'Give up on your dreams and die.',
    author: 'Levi Ackerman',
    hidden: true,
  },
];

export const footerJokes = [
  'worked on my machine · your mileage may vary',
  'no bugs were mass-harmed in the making',
  'localhost:3000 was the real friend all along',
  'git push --force · git push --remorse',
  'undefined is not a function · or is it?',
  'console.log("here") · the OG debugger',
  "it's not a bug · it's a feature request",
];
