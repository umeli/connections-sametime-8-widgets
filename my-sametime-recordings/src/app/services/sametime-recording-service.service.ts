import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Recording } from '../interfaces/sametimeMeeting/recordings';

@Injectable({
  providedIn: 'root'
})


export class SametimeRecordingService {
  constructor(private http: HttpClient) {
  }

  authUrl = '/widgets/my-recordings/api/stm';

  getRecordings() {
    const options = {
      responseType: 'json' as const,
      withCredentials: true
    };
    return this.http.get<Array<Recording>>(`${this.authUrl}/recordings`, options)
  }
}
