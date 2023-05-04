import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../config/app-config';
import { Recording } from '../interfaces/sametimeMeeting/recordings';

@Injectable({
  providedIn: 'root'
})


export class SametimeRecordingService {
  constructor(private http: HttpClient) {
  }

  apiUrl = `${AppConfig.widgetPath}/sametime/v1/recordings`;

  getRecordings() {
    const options = {
      responseType: 'json' as const,
      withCredentials: true
    };
    return this.http.get<Array<Recording>>(`${this.apiUrl}/recordings`, options)
  }
}
