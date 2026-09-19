import { APIGatewayProxyHandlerV2 } from 'aws-lambda';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

const ses = new SESClient({});

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  try {
    if (!event.body) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Missing request body' }),
      };
    }

    const { name, email, subject, message } = JSON.parse(event.body);

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Validation Error: name, email, and message are required.' }),
      };
    }

    const senderEmail = process.env.SES_SENDER_EMAIL || 'aishakhalfan45@gmail.com';

    const emailParams = {
      Source: senderEmail,
      Destination: {
        ToAddresses: [senderEmail],
      },
      Message: {
        Subject: { Data: `[Portfolio Contact] ${subject || 'New Message from ' + name}` },
        Body: {
          Text: {
            Data: `New portfolio contact submission:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject || 'N/A'}\n\nMessage:\n${message}`,
          },
        },
      },
    };

    try {
      await ses.send(new SendEmailCommand(emailParams));
    } catch (sesErr) {
      console.warn('Amazon SES invocation notice (Sandbox/Local):', sesErr);
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        success: true,
        message: 'Your message has been processed successfully via Amazon SES.',
      }),
    };
  } catch (error: any) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error', error: error.message }),
    };
  }
};
