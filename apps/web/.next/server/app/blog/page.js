(()=>{var e={};e.id=404,e.ids=[404],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},3351:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>o.a,__next_app__:()=>u,originalPathname:()=>m,pages:()=>d,routeModule:()=>p,tree:()=>c}),a(2761),a(2567),a(7824);var s=a(3282),n=a(5736),i=a(3906),o=a.n(i),r=a(6880),l={};for(let e in r)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>r[e]);a.d(t,l);let c=["",{children:["blog",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,2761)),"/vercel/sandbox/primary/apps/web/app/blog/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(a.bind(a,2567)),"/vercel/sandbox/primary/apps/web/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,7824,23)),"next/dist/client/components/not-found-error"]}],d=["/vercel/sandbox/primary/apps/web/app/blog/page.tsx"],m="/blog/page",u={require:a,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/blog/page",pathname:"/blog",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},9431:(e,t,a)=>{Promise.resolve().then(a.bind(a,9717))},9717:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>v});var s=a(3227),n=a(3677),i=a(649),o=a(4164),r=a(9347);let l=[{slug:"becoming-a-devsecops-engineer-vision",title:"Becoming a DevSecOps Engineer: My Vision to Build Secure, Cloud-Native Systems",excerpt:"My journey and roadmap into DevSecOps — bridging software engineering, cloud infrastructure automation, and embedding security at every phase of the CI/CD pipeline.",date:"2024-04-12",readTime:"6 min read",tags:["DevSecOps","AWS","Cloud Security","Kubernetes","CI/CD"],mediumUrl:"https://medium.com/@aishakk/becoming-a-devsecops-engineer-my-vision-to-build-secure-cloud-native-systems-0b1a2c3d4e5f",content:`
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
    `},{slug:"mastering-the-bash-pipe-workflows",title:"Mastering the Bash Pipe (|): Turning Commands into Powerful Workflows",excerpt:"A practical guide to unleashing the power of Unix pipelines, chaining text processing utilities like grep, awk, sed, and cut for rapid log analysis and system automation.",date:"2024-03-05",readTime:"5 min read",tags:["Linux","Bash","CLI","Shell Scripting","Unix"],mediumUrl:"https://medium.com/@aishakk/mastering-the-bash-pipe-turning-commands-into-powerful-workflows-1a2b3c4d5e6f",content:`
# Mastering the Bash Pipe (|): Turning Commands into Powerful Workflows

The Unix philosophy is simple yet profound: *Write programs that do one thing well, and work together.* The Bash pipe (\`|\`) is the ultimate tool that connects standard output (stdout) of one process directly into the standard input (stdin) of another.

## Unlocking Powerful Command Pipelines

### 1. Extracting Unique Error Logs from Web Servers

Instead of manually sifting through thousands of access log entries, chain \`grep\`, \`awk\`, \`sort\`, and \`uniq\`:

\`\`\`bash
# Extract 500-level HTTP error status codes and count unique client IPs
cat /var/log/nginx/access.log | grep "HTTP/1.1" 50" | awk '{print $1}' | sort | uniq -c | sort -nr
\`\`\`

### 2. Monitoring High CPU/Memory Processes

\`\`\`bash
# Get top 5 memory-consuming processes
ps aux --sort=-%mem | awk 'NR<=6 {print $2, $3, $4, $11}'
\`\`\`

## Why Master the Pipe?

Mastering command-line pipes enables cloud engineers and developers to troubleshoot production incidents in seconds directly on remote servers without installing heavy external dependencies.

Read the full article on Medium: [https://medium.com/@aishakk](https://medium.com/@aishakk)
    `},{slug:"serverless-solution-aws-lambda-s3-sns",title:"A Serverless Solution That Automatically Scales: AWS Lambda, S3 Events, and SNS Notifications",excerpt:"Designing an event-driven serverless architecture on AWS that automatically processes file uploads to S3, executes Lambda logic, and sends real-time SNS email notifications.",date:"2023-12-18",readTime:"7 min read",tags:["AWS","Lambda","S3","SNS","Serverless"],mediumUrl:"https://medium.com/@aishakk/a-serverless-solution-that-automatically-scales-when-in-use-aws-lambda-s3-buckets-and-events-2b3c4d5e6f7a",content:`
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
    `},{slug:"creating-amazon-ec2-instance-in-vpc",title:"Creating an Amazon EC2 Instance in a Custom VPC",excerpt:"Step-by-step hands-on guide to provisioning a secure Amazon EC2 instance inside a custom VPC with public subnets, internet gateway, route tables, and security groups.",date:"2023-11-10",readTime:"6 min read",tags:["AWS","EC2","VPC","Networking","Cloud Architecture"],mediumUrl:"https://medium.com/@aishakk/creating-amazon-ec2-instance-in-a-vpc-3c4d5e6f7a8b",content:`
# Creating an Amazon EC2 Instance in a Custom VPC

When deploying production workloads on AWS, relying on the default VPC is not recommended for production security. Creating a custom Virtual Private Cloud (VPC) gives you total isolation and control over your network topology.

## Step-by-Step Implementation

1. **Create the VPC**: Assign CIDR block \`10.0.0.0/16\`.
2. **Subnet Provisioning**: Create public subnet \`10.0.1.0/24\` in \`us-east-1a\`.
3. **Internet Gateway (IGW)**: Attach IGW to the VPC to enable public IPv4 connectivity.
4. **Route Table**: Create custom route table mapping \`0.0.0.0/0\` target to the IGW ID, and associate it with the public subnet.
5. **Security Group & EC2 Provisioning**: Launch an Ubuntu 22.04 LTS EC2 instance with inbound rules for HTTP (80) and SSH (22).

Read the complete guide on Medium: [https://medium.com/@aishakk](https://medium.com/@aishakk)
    `},{slug:"readme-md-that-will-make-your-code-shine",title:"The README.md That Will Make Your Code Shine",excerpt:"How to craft developer-friendly, clear, and professional README documentation for open-source repositories and team projects.",date:"2023-10-02",readTime:"4 min read",tags:["Documentation","Markdown","Git","OpenSource","BestPractices"],mediumUrl:"https://medium.com/@aishakk/the-readme-md-that-will-make-your-code-shine-4d5e6f7a8b9c",content:`
# The README.md That Will Make Your Code Shine

Your README.md is the front door of your project. Whether you are building an open-source library or a team portfolio project, a well-structured README communicates professionalism, clarity, and quality.

## Essential Elements of a Great README

1. **Project Title & Clear One-Liner**: What problem does this software solve?
2. **Architecture / Tech Stack Badges**: Languages, frameworks, and cloud services used.
3. **Quick Start & Installation Steps**: Reproducible shell commands.
4. **Environment Variables Template**: Clear list of expected secrets and API keys.
5. **Testing & Usage Examples**: Sample inputs and expected outputs.

Read the full article on Medium: [https://medium.com/@aishakk](https://medium.com/@aishakk)
    `},{slug:"postmortem-typo-alx-online-checker-down",title:"Postmortem: How a Typo Caused the ALX Online Checker to Be Down for 30 Minutes",excerpt:"A real-world incident postmortem analyzing root cause, detection timeline, resolution, and preventative blameless postmortem takeaways.",date:"2023-09-14",readTime:"5 min read",tags:["Postmortem","SRE","DevOps","ALX Africa","Debugging"],mediumUrl:"https://medium.com/@aishakk/postmortem-how-a-typo-caused-the-alx-online-checker-to-be-down-for-30-minutes-5e6f7a8b9c0d",content:`
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
    `}];var c=a(5195),d=a(4583);let m=(0,d.Z)("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]),u=(0,d.Z)("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);var p=a(86),h=a(5435),g=a(5749);let b=(0,d.Z)("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);var x=a(7139);let y=(0,d.Z)("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);var f=a(9966);function v(){let[e,t]=(0,n.useState)(0),[a,d]=(0,n.useState)(3),v=(0,n.useRef)(null),k=l.length,S=Math.max(0,k-a),w=()=>{t(e=>Math.max(0,e-1))},C=()=>{t(e=>Math.min(S,e+1))};return(0,s.jsxs)("div",{className:"min-h-screen flex flex-col bg-navy-950 text-slate-100",children:[s.jsx(o.Navbar,{}),s.jsx("main",{className:"flex-grow py-12 sm:py-16",children:(0,s.jsxs)("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",children:[(0,s.jsxs)("div",{className:"max-w-3xl mb-12",children:[(0,s.jsxs)("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 font-mono text-xs font-semibold mb-4",children:[s.jsx(m,{className:"w-3.5 h-3.5"}),s.jsx("span",{children:"MEDIUM ARTICLES & ARCHITECTURE GUIDES"})]}),(0,s.jsxs)("h1",{className:"font-heading text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight",children:["Technical ",s.jsx("span",{className:"text-cyan-400",children:"Notes & Blog"})]}),s.jsx("p",{className:"text-slate-300 text-base sm:text-lg mt-3 font-sans leading-relaxed",children:"Published articles on Medium covering DevSecOps, AWS serverless architectures, Linux command-line workflows, and system incident postmortems."})]}),(0,s.jsxs)("div",{className:"flex items-center justify-between gap-4 mb-6 pb-4 border-b border-navy-800",children:[(0,s.jsxs)("div",{className:"flex items-center gap-3",children:[(0,s.jsxs)("a",{href:"https://medium.com/@aishakk",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-navy-850 border border-navy-700 hover:border-cyan-400 text-slate-200 hover:text-cyan-400 font-mono text-xs font-semibold transition-all shadow-sm",children:[s.jsx(u,{className:"w-3.5 h-3.5 text-cyan-400"}),s.jsx("span",{children:"medium.com/@aishakk"}),s.jsx(p.Z,{className:"w-3 h-3 text-slate-400"})]}),(0,s.jsxs)("span",{className:"hidden sm:inline font-mono text-xs text-slate-400",children:["• Showing ",a," of ",k," articles"]})]}),(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[s.jsx("button",{onClick:w,disabled:0===e,"aria-label":"Previous Articles",className:"p-2.5 rounded-md bg-navy-850 border border-navy-700/80 hover:border-cyan-400/50 hover:bg-navy-800 text-cyan-400 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-navy-700/80 disabled:hover:bg-navy-850 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400",children:s.jsx(h.Z,{className:"w-5 h-5"})}),s.jsx("button",{onClick:C,disabled:e>=S,"aria-label":"Next Articles",className:"p-2.5 rounded-md bg-navy-850 border border-navy-700/80 hover:border-cyan-400/50 hover:bg-navy-800 text-cyan-400 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-navy-700/80 disabled:hover:bg-navy-850 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400",children:s.jsx(g.Z,{className:"w-5 h-5"})})]})]}),s.jsx("div",{ref:v,tabIndex:0,onKeyDown:e=>{"ArrowLeft"===e.key?(e.preventDefault(),w()):"ArrowRight"===e.key&&(e.preventDefault(),C())},className:"relative overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950 rounded-lg",children:s.jsx(f.E.div,{className:"flex gap-6 sm:gap-8 cursor-grab active:cursor-grabbing",drag:"x",dragConstraints:{right:0,left:-1e3},onDragEnd:(t,a)=>{a.offset.x<-40&&e<S?C():a.offset.x>40&&e>0&&w()},animate:{x:`-${100/a*e}%`},transition:{type:"tween",ease:"easeOut",duration:.35},children:l.map(e=>s.jsx("div",{className:"shrink-0 flex flex-col justify-between",style:{width:3===a?"calc((100% - 2 * 1.5rem) / 3)":2===a?"calc((100% - 1.5rem) / 2)":"100%"},children:(0,s.jsxs)("article",{className:"group h-full flex flex-col justify-between bg-navy-850 border border-navy-700/80 hover:border-cyan-400/40 rounded-lg p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"flex items-center justify-between gap-2 text-xs font-mono text-slate-400 mb-3",children:[(0,s.jsxs)("div",{className:"flex items-center gap-3",children:[(0,s.jsxs)("span",{className:"flex items-center gap-1.5",children:[s.jsx(b,{className:"w-3.5 h-3.5 text-cyan-400"}),e.date]}),s.jsx("span",{children:"•"}),(0,s.jsxs)("span",{className:"flex items-center gap-1.5",children:[s.jsx(x.Z,{className:"w-3.5 h-3.5"}),e.readTime]})]}),s.jsx("a",{href:"https://medium.com/@aishakk",target:"_blank",rel:"noopener noreferrer",className:"text-slate-400 hover:text-cyan-400 transition-colors","aria-label":"View on Medium",children:s.jsx(p.Z,{className:"w-4 h-4"})})]}),s.jsx("h2",{className:"font-heading text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors mb-3 line-clamp-2",children:s.jsx(i.default,{href:`/blog/${e.slug}`,children:e.title})}),s.jsx("p",{className:"text-slate-300 text-sm font-sans leading-relaxed mb-6 line-clamp-3",children:e.excerpt})]}),(0,s.jsxs)("div",{children:[s.jsx("div",{className:"flex flex-wrap gap-1.5 mb-5",children:e.tags.slice(0,3).map(e=>s.jsx(c.jA,{name:e,variant:"slate"},e))}),(0,s.jsxs)("div",{className:"flex items-center justify-between pt-3 border-t border-navy-700/50",children:[(0,s.jsxs)(i.default,{href:`/blog/${e.slug}`,className:"inline-flex items-center gap-2 text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 transition-colors",children:[s.jsx("span",{children:"Read Article"}),s.jsx(y,{className:"w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"})]}),s.jsx("a",{href:"https://medium.com/@aishakk",target:"_blank",rel:"noopener noreferrer",className:"text-[11px] font-mono text-slate-400 hover:text-slate-200 transition-colors",children:"Medium.com ↗"})]})]})]})},e.slug))})}),s.jsx("div",{className:"flex items-center justify-center gap-2 mt-8",children:Array.from({length:S+1}).map((a,n)=>s.jsx("button",{onClick:()=>t(n),"aria-label":`Go to slide ${n+1}`,className:`h-2 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${e===n?"w-7 bg-cyan-400":"w-2 bg-navy-700 hover:bg-slate-500"}`},n))})]})}),s.jsx(r.$,{})]})}},2761:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});let s=(0,a(3189).createProxy)(String.raw`/vercel/sandbox/primary/apps/web/app/blog/page.tsx#default`)}};var t=require("../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),s=t.X(0,[279,477,644,878],()=>a(3351));module.exports=s})();