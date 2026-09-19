import { APIGatewayProxyHandlerV2 } from 'aws-lambda';
import jwt from 'jsonwebtoken';

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  try {
    if (!event.body) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Missing request payload' }),
      };
    }

    const { key } = JSON.parse(event.body);
    const validSecret = process.env.JWT_SECRET || 'aisha-portfolio-jwt-secret-key-2024';

    if (key === 'admin123' || key === validSecret) {
      const token = jwt.sign(
        { user: 'aishakhalfan', role: 'admin' },
        validSecret,
        { expiresIn: '8h' }
      );

      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ success: true, token }),
      };
    }

    return {
      statusCode: 401,
      body: JSON.stringify({ success: false, message: 'Invalid admin key credentials' }),
    };
  } catch (err: any) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Auth error', error: err.message }),
    };
  }
};
