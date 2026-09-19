export interface WorkExperience {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  graduationDate: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  badgeUrl?: string;
}

export const WORK_EXPERIENCES: WorkExperience[] = [
  {
    role: 'IT Consultant',
    company: 'NextLevel Marketing Agency',
    location: 'Nairobi, Kenya',
    period: 'Jan 2024 – Sept 2024',
    bullets: [
      'Designed and managed client websites, ensuring high availability, speed, and modern user experience.',
      'Resolved complex technical issues to minimize system downtime and maintain operational continuity.',
      'Advised clients on strategic IT solutions improving operational efficiency, security posture, and cost-effectiveness.',
      'Managed end-to-end IT projects including system integrations, data migrations, and infrastructure upgrades.',
      'Conducted comprehensive IT audits to identify system bottlenecks and security compliance gaps.',
    ],
  },
  {
    role: 'AWS Cloud Practitioner Trainee',
    company: 'AWS reStart Program',
    location: 'Nairobi, Kenya',
    period: 'Sept 2023 – Dec 2023',
    bullets: [
      'Gained intensive hands-on training across AWS core services (EC2, S3, RDS, IAM, VPC, CloudWatch).',
      'Designed and deployed a fully elastic Apache web server solution utilizing a custom VPC with public and private subnets.',
      'Configured Elastic Load Balancing (ELB), EC2 Auto Scaling groups, NAT Gateway, Internet Gateway, Security Groups, and Network ACLs.',
      'Implemented automated backup, resource monitoring, and principle-of-least-privilege IAM policies.',
    ],
  },
  {
    role: 'ICT Lecturer',
    company: 'Jamia Training Institute',
    location: 'Nairobi, Kenya',
    period: 'Jun 2018 – Dec 2022',
    bullets: [
      'Taught core computer science modules including Programming (Python, C), Database Management, Graphic Design, and Web Development (HTML, CSS, JS).',
      'Designed comprehensive course curricula, practical lab exercises, and continuous assessment frameworks.',
      'Mentored over 200+ students through real-world capstone projects, preparing them for careers in tech.',
    ],
  },
  {
    role: 'Junior Systems Analyst',
    company: 'Gulf African Bank',
    location: 'Nairobi, Kenya',
    period: 'Apr 2017 – Sept 2017',
    bullets: [
      'Built a Python automation script to identify revenue leakages, successfully cutting operational financial losses by 30% within six months.',
      'Contributed to the development of a real-time M-Pesa transaction fraud detection system using Python, reducing fraudulent transactions by 20%.',
      'Executed user acceptance testing (UAT) and system integration deployments for banking applications.',
    ],
  },
  {
    role: 'Software Developer Intern',
    company: 'MegasmartCS',
    location: 'Nairobi, Kenya',
    period: 'Jan 2017 – Mar 2017',
    bullets: [
      'Designed and maintained the company website, enhancing UI usability and loading efficiency.',
      'Planned technical requirements and communicated project milestones with client stakeholders.',
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'Software Engineering Certificate',
    institution: 'ALX Africa',
    graduationDate: 'Graduated October 2023',
  },
  {
    degree: 'BSc Computer Science',
    institution: 'Umma University',
    graduationDate: 'Graduated March 2018',
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
  },
];

export const TECHNICAL_SKILLS = [
  {
    category: 'Programming & Languages',
    skills: ['Python', 'JavaScript (ES6+)', 'Node.js', 'C', 'Bash Scripting', 'HTML5 & CSS3'],
  },
  {
    category: 'Cloud Infrastructure (AWS)',
    skills: [
      'AWS EC2',
      'AWS S3',
      'AWS RDS',
      'AWS IAM',
      'AWS DynamoDB',
      'AWS Aurora',
      'CloudFormation',
      'AWS SNS & SQS',
      'VPC & Security Groups',
    ],
  },
  {
    category: 'Databases & Storage',
    skills: ['MySQL', 'Oracle Database', 'DynamoDB', 'Relational DB Design (ERD)', 'Schema Normalization'],
  },
  {
    category: 'Linux & System Admin',
    skills: ['Ubuntu', 'CentOS', 'RedHat', 'Unix Shell Scripting', 'POSIX System Calls', 'GCC'],
  },
  {
    category: 'DevOps & CI/CD',
    skills: ['Git & GitHub Actions', 'Jenkins CI/CD', 'Apache', 'Nginx', 'Tomcat', 'Docker & Kubernetes Fundamentals'],
  },
  {
    category: 'Networking & Virtualization',
    skills: ['DNS', 'TCP/IP', 'SSL/TLS', 'DHCP', 'VirtualBox', 'Vagrant', 'VMware'],
  },
];
