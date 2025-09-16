import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';
import { combineDateAndTimeToISO } from '../../../common/utils/date-time.helper';

export class GoogleCalendarService {
  private oauth2Client: OAuth2Client;

  constructor() {
    this.oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URI,
    );

    this.oauth2Client.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
    });
  }

  async createMeet(
    date: string,
    time: string,
    attendeesEmails: string[],
  ): Promise<string> {
    const startTimeISO = combineDateAndTimeToISO(date, time);

    const calendar = google.calendar({
      version: 'v3',
      auth: this.oauth2Client,
    });

    const startDateTime = new Date(startTimeISO);
    const endDateTime = new Date(startDateTime.getTime() + 30 * 60 * 1000);

    const event = {
      summary: 'Mentorship Session',
      description: 'Your mentorship meeting',
      start: { dateTime: startDateTime.toISOString(), timeZone: 'UTC' },
      end: { dateTime: endDateTime.toISOString(), timeZone: 'UTC' },
      attendees: attendeesEmails.map((email) => ({ email })),
      conferenceData: {
        createRequest: {
          requestId: `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`,
          conferenceSolutionKey: { type: 'hangoutsMeet' },
        },
      },
    };

    const response = await calendar.events.insert({
      calendarId: 'primary',
      requestBody: event,
      conferenceDataVersion: 1,
      sendUpdates: 'all',
    });
    return response.data.hangoutLink || '';
  }
}
