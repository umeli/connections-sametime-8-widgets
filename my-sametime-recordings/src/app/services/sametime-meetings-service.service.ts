import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SametimeMeeting } from '../interfaces/sametimeMeeting/sametimemeeting';

@Injectable({
  providedIn: 'root'
})


export class SametimeMeetingsServiceService {
  constructor(private http: HttpClient) {
  }
  //catalogUrl = 'https://dosam.collab.cloud/meeting-catalog/api/v1';
  //catalogUrl = '/my-meetings/api/meeting-catalog/api/v1';
  catalogUrl = '/widgets/my-recordings/api/stm';
  getMeetings() {
    const options = {
      responseType: 'json' as const,
      withCredentials: true
    };
    return this.http.get<Array<SametimeMeeting>>(`${this.catalogUrl}/meetings`, options)
  }
}
