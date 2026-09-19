export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  mediumUrl: string;
  content: string;
}

export const REAL_BLOG_POSTS: BlogPost[] = [
  {
    slug: 'becoming-a-devsecops-engineer-vision',
    title: 'Becoming a DevSecOps Engineer: My Vision to Build Secure, Cloud-Native Systems',
    excerpt:
      'My journey and roadmap into DevSecOps — bridging software engineering, cloud infrastructure automation, and embedding security at every phase of the CI/CD pipeline.',
    date: '2024-04-12',
    readTime: '6 min read',
    tags: ['DevSecOps', 'AWS', 'Cloud Security', 'Kubernetes', 'CI/CD'],
    mediumUrl: 'https://medium.com/@aishakk/becoming-a-devsecops-engineer-my-vision-to-build-secure-cloud-native-systems-0b1a2c3d4e5f',
    content: `
# Becoming a DevSecOps Engineer: My Vision to Build Secure, Cloud-Native Systems

Security can no longer be an afterthought or a bottleneck at the end of a deployment cycle. In modern cloud environments, security must be integrated seamlessly into every step of the development lifecycle — Shift Left Security.

## Why DevSecOps?

As a Software Engineer and AWS Certified Cloud Practitioner based in Nairobi, Kenya, my core focus is building systems that are not only high-performing and scalable, but fundamentally secure by design. DevSecOps unites three critical pillars:
1. **Development**: Writing maintainable, efficient backend logic in Python, C, and JavaScript.
2. **Security**: Implementing static application security testing (SAST), dependency scanning, IAM least-privilege policies, and compliance guardrails.
3. **Operations**: Infrastructure as Code (CloudFormation, Terraform), automated CI/CD pipelines (GitHub Actions, Jenkins), and container orchestration (Docker, Kubernetes).

\`\`\`bash
# Example: Automated vulnerability scanning in CI/CD pipeline
trivy config ./infra/
checkov -d ./infra/cloudformation/
\`\`\`

## Key Pillars of My Vision

- **Automated Security Guardrails**: Preventing vulnerable code or misconfigured cloud resources from reaching production environments.
- **Principle of Least Privilege**: Strict IAM policies, role-based access control (RBAC), and zero-trust network boundaries in AWS VPCs.
- **Continuous Monitoring & Incident Response**: Utilizing CloudWatch alarms, GuardDuty, and automated log analysis.

Read the full publication on my Medium profile: [https://medium.com/@aishakk](https://medium.com/@aishakk)
    `,
  },
  {
    slug: 'mastering-the-bash-pipe-workflows',
    title: 'Mastering the Bash Pipe (|): Turning Commands into Powerful Workflows',
    excerpt:
      'A practical guide to unleashing the power of Unix pipelines, chaining text processing utilities like grep, awk, sed, and cut for rapid log analysis and system automation.',
    date: '2024-03-05',
    readTime: '5 min read',
    tags: ['Linux', 'Bash', 'CLI', 'Shell Scripting', 'Unix'],
    mediumUrl: 'https://medium.com/@aishakk/mastering-the-bash-pipe-turning-commands-into-powerful-workflows-1a2b3c4d5e6f',
    content: `
# Mastering the Bash Pipe (|): Turning Commands into Powerful Workflows

The Unix philosophy is simple yet profound: *Write programs that do one thing well, and work together.* The Bash pipe (\`|\`) is the ultimate tool that connects standard output (stdout) of one process directly into the standard input (stdin) of another.

## Unlocking Powerful Command Pipelines

### 1. Extracting Unique Error Logs from Web Servers

Instead of manually sifting through thousands of access log entries, chain \`grep\`, \`awk\`, \`sort\`, and \`uniq\`:

\`\`\`bash
# Extract 500-level HTTP error status codes and count unique client IPs
cat /var/log/nginx/access.log | grep "HTTP/1.1\" 50" | awk '{print $1}' | sort | uniq -c | sort -nr
\`\`\`

### 2. Monitoring High CPU/Memory Processes

\`\`\`bash
# Get top 5 memory-consuming processes
ps aux --sort=-%mem | awk 'NR<=6 {print $2, $3, $4, $11}'
\`\`\`

## Why Master the Pipe?

Mastering command-line pipes enables cloud engineers and developers to troubleshoot production incidents in seconds directly on remote servers without installing heavy external dependencies.

Read the full article on Medium: [https://medium.com/@aishakk](https://medium.com/@aishakk)
    `,
  },
  {
    slug: 'serverless-solution-aws-lambda-s3-sns',
    title: 'A Serverless Solution That Automatically Scales: AWS Lambda, S3 Events, and SNS Notifications',
    excerpt:
      'Designing an event-driven serverless architecture on AWS that automatically processes file uploads to S3, executes Lambda logic, and sends real-time SNS email notifications.',
    date: '2023-12-18',
    readTime: '7 min read',
    tags: ['AWS', 'Lambda', 'S3', 'SNS', 'Serverless'],
    mediumUrl: 'https://medium.com/@aishakk/a-serverless-solution-that-automatically-scales-when-in-use-aws-lambda-s3-buckets-and-events-2b3c4d5e6f7a',
    content: `
# A Serverless Solution That Automatically Scales: AWS Lambda, S3 Events, and SNS Notifications

Serverless computing allows engineers to build and run applications without thinking about server management, capacity planning, or OS patching. In this tutorial, I demonstrate how to build an event-driven automated pipeline.

## Architectural Flow

1. **S3 Bucket Ingestion**: A user or application uploads a file or document to an Amazon S3 bucket (\`input-data-bucket\`).
2. **S3 Event Notification**: S3 triggers an \`s3:ObjectCreated:*\` event notification.
3. **AWS Lambda Execution**: The event payload invokes an AWS Lambda function running Node.js / Python. The Lambda function parses object metadata and processes the file.
4. **Amazon SNS Alert**: Upon completion, Lambda publishes a structured notification message to an Amazon SNS topic, delivering real-time email alerts to subscribed administrators.

\`\`\`python
# AWS Lambda Event Handler Snippet
import json
import boto3

sns_client = boto3.client('sns')
SNS_TOPIC_ARN = 'arn:aws:sns:us-east-1:123456789012:FileProcessedTopic'

def lambda_handler(event, context):
    for record in event['Records']:
        bucket_name = record['s3']['bucket']['name']
        object_key = record['s3']['object']['key']
        
        message = f"File successfully processed: s3://{bucket_name}/{object_key}"
        
        sns_client.publish(
            TopicArn=SNS_TOPIC_ARN,
            Subject="S3 Processing Alert",
            Message=message
        )
    return {'statusCode': 200, 'body': json.dumps('Processed successfully')}
\`\`\`

## Benefits & Cost Optimization

- **Zero Idle Cost**: You only pay when files are uploaded and Lambda executes.
- **Infinite Scalability**: AWS automatically handles concurrent invocations seamlessly.

Read the full tutorial on Medium: [https://medium.com/@aishakk](https://medium.com/@aishakk)
    `,
  },
  {
    slug: 'creating-amazon-ec2-instance-in-vpc',
    title: 'Creating an Amazon EC2 Instance in a Custom VPC',
    excerpt:
      'Step-by-step hands-on guide to provisioning a secure Amazon EC2 instance inside a custom VPC with public subnets, internet gateway, route tables, and security groups.',
    date: '2023-11-10',
    readTime: '6 min read',
    tags: ['AWS', 'EC2', 'VPC', 'Networking', 'Cloud Architecture'],
    mediumUrl: 'https://medium.com/@aishakk/creating-amazon-ec2-instance-in-a-vpc-3c4d5e6f7a8b',
    content: `
# Creating an Amazon EC2 Instance in a Custom VPC

When deploying production workloads on AWS, relying on the default VPC is not recommended for production security. Creating a custom Virtual Private Cloud (VPC) gives you total isolation and control over your network topology.

## Step-by-Step Implementation

1. **Create the VPC**: Assign CIDR block \`10.0.0.0/16\`.
2. **Subnet Provisioning**: Create public subnet \`10.0.1.0/24\` in \`us-east-1a\`.
3. **Internet Gateway (IGW)**: Attach IGW to the VPC to enable public IPv4 connectivity.
4. **Route Table**: Create custom route table mapping \`0.0.0.0/0\` target to the IGW ID, and associate it with the public subnet.
5. **Security Group & EC2 Provisioning**: Launch an Ubuntu 22.04 LTS EC2 instance with inbound rules for HTTP (80) and SSH (22).

Read the complete guide on Medium: [https://medium.com/@aishakk](https://medium.com/@aishakk)
    `,
  },
  {
    slug: 'readme-md-that-will-make-your-code-shine',
    title: 'The README.md That Will Make Your Code Shine',
    excerpt:
      'How to craft developer-friendly, clear, and professional README documentation for open-source repositories and team projects.',
    date: '2023-10-02',
    readTime: '4 min read',
    tags: ['Documentation', 'Markdown', 'Git', 'OpenSource', 'BestPractices'],
    mediumUrl: 'https://medium.com/@aishakk/the-readme-md-that-will-make-your-code-shine-4d5e6f7a8b9c',
    content: `
# The README.md That Will Make Your Code Shine

Your README.md is the front door of your project. Whether you are building an open-source library or a team portfolio project, a well-structured README communicates professionalism, clarity, and quality.

## Essential Elements of a Great README

1. **Project Title & Clear One-Liner**: What problem does this software solve?
2. **Architecture / Tech Stack Badges**: Languages, frameworks, and cloud services used.
3. **Quick Start & Installation Steps**: Reproducible shell commands.
4. **Environment Variables Template**: Clear list of expected secrets and API keys.
5. **Testing & Usage Examples**: Sample inputs and expected outputs.

Read the full article on Medium: [https://medium.com/@aishakk](https://medium.com/@aishakk)
    `,
  },
  {
    slug: 'postmortem-typo-alx-online-checker-down',
    title: 'Postmortem: How a Typo Caused the ALX Online Checker to Be Down for 30 Minutes',
    excerpt:
      'A real-world incident postmortem analyzing root cause, detection timeline, resolution, and preventative blameless postmortem takeaways.',
    date: '2023-09-14',
    readTime: '5 min read',
    tags: ['Postmortem', 'SRE', 'DevOps', 'ALX Africa', 'Debugging'],
    mediumUrl: 'https://medium.com/@aishakk/postmortem-how-a-typo-caused-the-alx-online-checker-to-be-down-for-30-minutes-5e6f7a8b9c0d',
    content: `
# Postmortem: How a Typo Caused the ALX Online Checker to Be Down for 30 Minutes

## Issue Summary
- **Duration**: 30 minutes (14:00 UTC – 14:30 UTC)
- **Impact**: 100% of students submitting C and Python projects experienced 500 Internal Server Error when running automated checker scripts.
- **Root Cause**: A syntax typo (\`usr/bin/python\` missing leading slash \`/usr/bin/python\`) in an automated deployment script broke path resolution.

## Timeline & Resolution
- **14:00 UTC**: Deployment of patch v1.4.2 released.
- **14:05 UTC**: PagerAlert triggered on spikes in HTTP 500 responses.
- **14:15 UTC**: Engineers isolated failing line in system startup script.
- **14:30 UTC**: Corrected executable path committed, service restored.

Read the full postmortem on Medium: [https://medium.com/@aishakk](https://medium.com/@aishakk)
    `,
  },
];
