import { Controller, Get, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';

@Controller('auth')
export class AuthController {
  private oauth2Client: OAuth2Client;

  constructor() {
    this.oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URI,
    );
  }

  @Get('google')
  getGoogleAuthUrl(@Res() res: Response) {
    const url = this.oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: [
        'https://www.googleapis.com/auth/calendar',
        'https://www.googleapis.com/auth/calendar.events',
      ],
      prompt: 'consent',
    });

    return res.redirect(url);
  }

  @Get('google/callback')
  async googleAuthCallback(@Query('code') code: string) {
    const { tokens } = await this.oauth2Client.getToken(code);
    console.log('✅ Here are your tokens:', tokens);
    return `Copy this refresh token: ${tokens.refresh_token}`;
  }
}
