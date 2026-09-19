# Aisha Kauma Khalifan — Software Engineer & Cloud Engineer Portfolio

Full-stack monorepo portfolio website and AWS serverless backend for **Aisha Kauma Khalifan**, AWS Certified Cloud Practitioner and Software Engineer based in Nairobi, Kenya.

Designed with a high-contrast dark-mode design system (**Space Grotesk** + **Inter** + **JetBrains Mono** fonts, Dark Navy base `#0A0E17`, Cyan `#22D3EE` accent, and subtle Violet `#8B5CF6` highlights).

---

## 🚀 Architecture & Monorepo Structure

```text
aisha-portfolio/
├── apps/
│   ├── web/                    # Next.js 14+ App Router frontend (Vercel)
│   │   ├── app/
│   │   │   ├── page.tsx            # Home page & visual hero
│   │   │   ├── about/page.tsx      # Experience timeline, skills grid, certs
│   │   │   ├── projects/page.tsx   # All 4 real projects gallery
│   │   │   ├── blog/               # MDX/Markdown technical notes
│   │   │   ├── contact/            # Amazon SES form integration
│   │   │   └── admin/              # Protected CMS dashboard
│   │   ├── components/             # Navbar, Footer, Hero
│   │   ├── lib/                    # Project & Experience datasets
│   │   └── public/
│   │       └── resume.pdf          # ⚠️ Placeholder resume PDF
│   └── api/                    # AWS Lambda Serverless Backend
│       ├── functions/
│       │   ├── projects/           # getProjects & createProject handlers
│       │   ├── blog/               # getBlogPosts handler
│       │   ├── contact/            # Amazon SES email dispatcher
│       │   └── auth/               # JWT authentication handler
│       ├── scripts/
│       │   └── seed-dynamodb.ts    # Seed script for DynamoDB
│       └── serverless.yml          # Serverless Framework configuration
├── packages/
│   └── ui/                     # Shared design system components (Button, TechBadge, ProjectCard)
├── infra/                      # Infrastructure as Code templates
├── .github/workflows/
│   └── ci-cd.yml               # Automated GitHub Actions pipeline
├── .env.example
├── package.json
└── README.md
```

---

## 📄 Resume PDF Flag & Replacement Instructions

> [!IMPORTANT]
> **PDF Resume File Location**: The resume download button points to [`/resume.pdf`](file:///d:/aisha-portfolio/apps/web/public/resume.pdf).
>
> **Action Required Before Production Deploy**:
> 1. Export Aisha's updated resume as a PDF file named `resume.pdf`.
> 2. Copy/overwrite the file at `apps/web/public/resume.pdf`.
> 3. Commit and push to deploy the updated file to Vercel/S3.

---

## ⚡ AWS Free-Tier Infrastructure & Cost Safeguards

The backend is engineered to stay **100% within the AWS Always-Free and 12-Month Free Tiers**:

| Service | Always-Free Limit | Deployment Config | Cost Exceeded Risk |
| :--- | :--- | :--- | :--- |
| **AWS Lambda** | 1,000,000 requests/month | Node.js 20.x, 128MB RAM limit | Negligible ($0.20/M requests after 1M) |
| **Amazon API Gateway** | 1,000,000 requests/month (HTTP API) | HTTP API (cheaper $1.00/M tier) | < $0.10/month at normal portfolio traffic |
| **Amazon DynamoDB** | 25 GB storage, 25 WCU / 25 RCU | On-Demand (`PAY_PER_REQUEST`) | Zero cost for normal traffic |
| **Amazon SES** | 62,000 outbound emails/month | Triggered from EC2/Lambda | $0.10 per 1,000 emails thereafter |
| **Amazon CloudWatch** | 10 GB log ingestion / 5 GB metrics | Basic execution logs & 1-day retention | Free tier bounds |

---

## 🛠️ Local Development & Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Run Monorepo Unit Tests
```bash
npm test
```

### 5. Seed Local DynamoDB
```bash
npm run seed
```

---

## 🔄 CI/CD Pipeline (`.github/workflows/ci-cd.yml`)

The repository includes a GitHub Actions pipeline that automatically:
1. **Lint & Test**: Validates TypeScript types, Next.js build, and Vitest test suites.
2. **Deploy Backend**: Packages and deploys AWS Lambda functions via Serverless Framework on push to `main`.
3. **Deploy Frontend**: Builds and deploys the Next.js frontend to Vercel.

---

## 💼 Real Content Summary

### Projects
1. **HomeMadeGrub** — Full-stack web platform connecting home cooks with local customers (`React`, `Redux`, `Node.js`, `Express`, `MySQL`).
2. **AWS Projects** — Curated AWS builds (`EC2`, `CloudFormation`, `SNS`, `SQS`, `S3`, `VPC`, `IAM`).
3. **AirBnB Database** — Relational database schema design & ERD (`SQL`, `MySQL`).
4. **Simple Shell** — Unix command interpreter built from scratch in C (`C`, `Linux`, `GCC`).

### Work Experience
1. **IT Consultant** — NextLevel Marketing Agency (Jan 2024 – Sept 2024)
2. **AWS Cloud Practitioner Trainee** — AWS reStart Program (Sept 2023 – Dec 2023)
3. **ICT Lecturer** — Jamia Training Institute (Jun 2018 – Dec 2022)
4. **Junior Systems Analyst** — Gulf African Bank (Apr 2017 – Sept 2017) — *Python automation cutting revenue leakages by 30% and fraud by 20%*
5. **Software Developer Intern** — MegasmartCS (Jan 2017 – Mar 2017)

### Certifications & Education
- **AWS Certified Cloud Practitioner** (Amazon Web Services)
- **Software Engineering Certificate** (ALX Africa, Oct 2023)
- **BSc Computer Science** (Umma University, Mar 2018)

---

## 👤 Contact Details
- **Email**: aishakhalfan45@gmail.com
- **Phone**: +254 714 551 030
- **GitHub**: [github.com/AishaKhalfan](https://github.com/AishaKhalfan)
- **LinkedIn**: [linkedin.com/in/aisha-khalifan-433227b5](https://www.linkedin.com/in/aisha-khalifan-433227b5/)
- **X/Twitter**: [twitter.com/_aishakhalfan](https://twitter.com/_aishakhalfan)
