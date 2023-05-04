import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SametimeUser, SametimeAuth } from '../interfaces/sametimeMeeting/sametimeuser';

@Injectable({
  providedIn: 'root'
})


export class SametimeAuthServiceService {
  constructor(private http: HttpClient) {
  }

  authUrl = '/my-meetings/api/auth';

  refreshToken() {
    const options = {
      responseType: 'json' as const,
      withCredentials: true
    };
    return this.http.get<SametimeAuth>(`${this.authUrl}/refresh`, options)
  }
}
