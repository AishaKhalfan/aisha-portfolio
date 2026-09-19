import { APIGatewayProxyHandlerV2 } from 'aws-lambda';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, ScanCommand } from '@aws-sdk/lib-dynamodb';

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

const FALLBACK_PROJECTS = [
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
    category: 'Cloud Infrastructure',
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
    category: 'Unix Systems Software',
    description:
      'A Unix command-line shell interpreter built from scratch in C, supporting both interactive and scripting modes (paired project with Eric Okemwa).',
    tech: ['C', 'Linux', 'GCC'],
    repoUrl: 'https://github.com/AishaKhalfan/simple_shell',
  },
];

export const handler: APIGatewayProxyHandlerV2 = async () => {
  const tableName = process.env.DYNAMODB_TABLE_PROJECTS;

  try {
    if (tableName) {
      const command = new ScanCommand({ TableName: tableName });
      const response = await docClient.send(command);
      if (response.Items && response.Items.length > 0) {
        return {
          statusCode: 200,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ success: true, projects: response.Items }),
        };
      }
    }
  } catch (err) {
    console.warn('DynamoDB scan fallback activated:', err);
  }

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ success: true, projects: FALLBACK_PROJECTS }),
  };
};
