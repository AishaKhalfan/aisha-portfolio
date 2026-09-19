import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand } from '@aws-sdk/lib-dynamodb';

const client = new DynamoDBClient({
  endpoint: process.env.DYNAMODB_ENDPOINT || 'http://localhost:8000',
  region: 'us-east-1',
});
const docClient = DynamoDBDocumentClient.from(client);

const PROJECTS = [
  {
    id: 'homemade-grub',
    number: '1',
    title: 'HomeMadeGrub',
    category: 'Full-Stack Web Platform',
    description:
      'A full-stack web platform connecting home cooks with customers, letting users discover and order homemade meals from local kitchens. Built as a team project (with Irungu Josphat and Hazi Adan).',
    tech: ['React', 'Redux', 'Node.js', 'Express', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    repoUrl: 'https://github.com/AishaKhalfan/Webstack_Portfolio_Project',
  },
  {
    id: 'aws-projects',
    number: '2',
    title: 'AWS Projects',
    category: 'Cloud Infrastructure & Serverless',
    description:
      'A curated collection of hands-on AWS builds: EC2 instance provisioning, a serverless architecture implementation, infrastructure automation with AWS CloudFormation, a messaging system using SNS and SQS, deploying a React app on EC2, and hosting a static site on S3.',
    tech: ['AWS EC2', 'CloudFormation', 'SNS', 'SQS', 'S3', 'AWS CLI'],
    repoUrl: 'https://github.com/AishaKhalfan/aws-projects',
  },
  {
    id: 'airbnb-database',
    number: '3',
    title: 'AirBnB Database',
    category: 'Backend & Database Architecture',
    description:
      'Backend and database design project: entity-relationship diagrams, schema normalization, and advanced SQL querying scripts for an Airbnb-style booking system.',
    tech: ['SQL', 'Relational Database Design', 'ERD'],
    repoUrl: 'https://github.com/AishaKhalfan/alx-airbnb-database',
  },
  {
    id: 'simple-shell',
    number: '4',
    title: 'Simple Shell',
    category: 'Systems Programming (C / Unix)',
    description:
      'A Unix command-line shell interpreter built from scratch in C, supporting both interactive and scripting modes (paired project with Eric Okemwa).',
    tech: ['C', 'Linux', 'GCC'],
    repoUrl: 'https://github.com/AishaKhalfan/simple_shell',
  },
];

async function seed() {
  const tableName = process.env.DYNAMODB_TABLE_PROJECTS || 'aisha-portfolio-projects-dev';
  console.log(`Seeding DynamoDB table: ${tableName}`);

  for (const item of PROJECTS) {
    try {
      await docClient.send(
        new PutCommand({
          TableName: tableName,
          Item: item,
        })
      );
      console.log(`✓ Seeded project: ${item.title}`);
    } catch (err) {
      console.log(`[Seed Notice]: Could not connect to local DynamoDB endpoint at localhost:8000. Fallback dataset is built-in.`);
      break;
    }
  }

  console.log('Seed process completed.');
}

seed();
