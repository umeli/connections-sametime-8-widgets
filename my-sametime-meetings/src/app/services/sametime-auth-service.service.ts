import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../config/app-config';
import { SametimeUser, SametimeAuth } from '../interfaces/sametimeMeeting/sametimeuser';

@Injectable({
  providedIn: 'root'
})


export class SametimeAuthServiceService {
  constructor(private http: HttpClient) {
  }

  authUrl = `${AppConfig.widgetPath}/sametime/v1/auth`;
  refreshToken() {
    const options = {
      responseType: 'json' as const,
      withCredentials: true
    };
    return this.http.get<SametimeAuth>(`${this.authUrl}/refresh`, options)
  }
}
