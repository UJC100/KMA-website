import { google } from 'googleapis';
import { Request, Response } from 'express';

// Reuse this!
const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  'http://localhost:3000/oauth2callback',
);

export const getRefreshToken = () => {
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: [
      'https://www.googleapis.com/auth/calendar',
      'https://www.googleapis.com/auth/calendar.events',
    ],
    prompt: 'consent',
  });

  console.log('Visit this URL:', authUrl);
};

// This is your callback handler!
export const handleOAuthCallback = async (req: Request, res: Response) => {
  const code = req.query.code as string;

  const { tokens } = await oauth2Client.getToken(code);
  oauth2Client.setCredentials(tokens);

  console.log('Access Token:', tokens.access_token);
  console.log('Refresh Token:', tokens.refresh_token);

  // 👉 Store tokens securely in your DB or .env for development only!
  res.send('Tokens received! You can now close this window.');
};
