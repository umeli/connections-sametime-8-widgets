import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../config/app-config';
import { SametimeMeeting } from '../interfaces/sametimeMeeting/sametimemeeting';

@Injectable({
  providedIn: 'root'
})


export class SametimeMeetingsServiceService {
  constructor(private http: HttpClient) {
  }

  catalogUrl = `${AppConfig.widgetPath}/sametime/v1/meetings`;
  getMeetings() {
    const options = {
      responseType: 'json' as const,
      withCredentials: true
    };
    return this.http.get<Array<SametimeMeeting>>(`${this.catalogUrl}/meetings`, options)
  }
}
