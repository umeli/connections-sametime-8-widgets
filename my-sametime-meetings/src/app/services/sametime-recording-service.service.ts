import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Recording } from '../interfaces/sametimeMeeting/recordings';

@Injectable({
  providedIn: 'root'
})


export class SametimeAuthServiceService {
  constructor(private http: HttpClient) {
  }

  authUrl = '/my-meetings/api/recordings';

  refreshToken() {
    const options = {
      responseType: 'json' as const,
      withCredentials: true
    };
    return this.http.get<Recording>(`${this.authUrl}/recordings`, options)
  }
}
