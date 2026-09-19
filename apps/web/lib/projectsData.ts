export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  longDescription?: string;
  tech: string[];
  repoUrl: string;
  liveUrl?: string;
  featured?: boolean;
  isPlaceholder?: boolean; // Flag to demarcate placeholder cards for testing pagination
}

export const REAL_PROJECTS: Project[] = [
  {
    id: 'homemade-grub',
    number: '1',
    title: 'HomeMadeGrub',
    category: 'Full-Stack Web Platform',
    description:
      'A full-stack web platform connecting home cooks with customers, letting users discover and order homemade meals from local kitchens. Built as a team project (with Irungu Josphat and Hazi Adan).',
    longDescription:
      'HomeMadeGrub bridges the gap between passionate home culinary creators and food enthusiasts seeking authentic, home-cooked meals. Built with a scalable Node.js/Express backend, MySQL database, Redux state management, and a modern responsive React frontend.',
    tech: [
      'React',
      'Redux',
      'Node.js',
      'Express',
      'MySQL',
      'HTML',
      'CSS',
      'JavaScript',
    ],
    repoUrl: 'https://github.com/AishaKhalfan/Webstack_Portfolio_Project',
    featured: true,
  },
  {
    id: 'aws-projects',
    number: '2',
    title: 'AWS Projects',
    category: 'Cloud Infrastructure & Serverless',
    description:
      'A curated collection of hands-on AWS builds: EC2 instance provisioning, a serverless architecture implementation, infrastructure automation with AWS CloudFormation, a messaging system using SNS and SQS, deploying a React app on EC2, and hosting a static site on S3.',
    longDescription:
      'Comprehensive repository documenting production-ready cloud architectural patterns on AWS. Demonstrates infrastructure as code (CloudFormation), asynchronous messaging architectures (SNS/SQS), elastic compute scaling, and cloud security best practices.',
    tech: [
      'AWS EC2',
      'CloudFormation',
      'SNS',
      'SQS',
      'S3',
      'AWS CLI',
      'VPC',
      'IAM',
    ],
    repoUrl: 'https://github.com/AishaKhalfan/aws-projects',
    featured: true,
  },
  {
    id: 'airbnb-database',
    number: '3',
    title: 'AirBnB Database',
    category: 'Backend & Database Architecture',
    description:
      'Backend and database design project: entity-relationship diagrams (ERD), schema normalization, and advanced SQL querying scripts for an Airbnb-style booking system.',
    longDescription:
      'Engineered normalized database schemas handling complex relational entities including Users, Places, Reviews, Amenities, and Bookings. Implemented strict data integrity constraints, indexing strategies, and optimized SQL joins.',
    tech: [
      'SQL',
      'Relational Database Design',
      'ERD Diagramming',
      'MySQL',
      'Database Normalization',
    ],
    repoUrl: 'https://github.com/AishaKhalfan/alx-airbnb-database',
    featured: true,
  },
  {
    id: 'simple-shell',
    number: '4',
    title: 'Simple Shell',
    category: 'Systems Programming (C / Unix)',
    description:
      'A Unix command-line shell interpreter built from scratch in C, supporting both interactive and scripting modes (paired project with Eric Okemwa).',
    longDescription:
      'Low-level systems programming implementation replicating core Unix shell capabilities: command line parsing, process management using fork() and execve(), environment variable handling, builtin command execution, and custom memory management.',
    tech: [
      'C',
      'Linux',
      'GCC',
      'POSIX APIs',
      'Memory Management',
      'Unix System Calls',
    ],
    repoUrl: 'https://github.com/AishaKhalfan/simple_shell',
    featured: true,
  },

  // =========================================================================
  // PLACEHOLDER PROJECTS (For testing pagination & autoplay behavior)
  // Remove or replace these items once new production projects are published.
  // =========================================================================
  {
    id: 'placeholder-1',
    number: '5',
    title: 'Coming Soon: DevSecOps Pipeline Blueprint',
    category: 'Cloud Security & IaC',
    description:
      'Automated Terraform and GitHub Actions pipeline template implementing SAST, container scanning, and AWS IAM security guardrails. Currently under active development.',
    tech: ['Terraform', 'GitHub Actions', 'Trivy', 'Checkov'],
    repoUrl: '',
    isPlaceholder: true,
  },
  {
    id: 'placeholder-2',
    number: '6',
    title: 'Coming Soon: Microservice Event Bus',
    category: 'Backend & Event-Driven Systems',
    description:
      'Asynchronous microservices event bus implementation leveraging AWS EventBridge, SQS FIFO queues, and Node.js serverless functions.',
    tech: ['AWS EventBridge', 'SQS', 'Node.js', 'TypeScript'],
    repoUrl: '',
    isPlaceholder: true,
  },
];
