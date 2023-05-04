import { Component, OnInit, Output } from '@angular/core';

import { SametimeAuthServiceService } from './services/sametime-auth-service.service';
import { SametimeAuth } from './interfaces/sametimeMeeting/sametimeuser';
import { AppConfig } from './config/app-config';
import { Recording } from './interfaces/sametimeMeeting/recordings';
import { SametimeRecordingService } from './services/sametime-recording-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'My Recordings';
  
  constructor(private sametime: SametimeRecordingService, private auth: SametimeAuthServiceService) {
  }
  @Output() myRecordingList: Recording[] = [];
  @Output() sameTime: String = `${AppConfig.sameTime}`
  @Output() meetingBase: String = `https://${AppConfig.sameTime}/meeting/recording`;
  
  ngOnInit() {

    this.refreshAuth();
  }
  refreshAuth() {
    this.auth.refreshToken().subscribe((data: SametimeAuth) => {
      console.log(JSON.stringify(data));
      this.myRecordings();

    });
  }

  formatBytes(bytes:number, decimals:number) {
    if(bytes== 0)
    {
        return "0 Byte";
    }
    var k = 1024; //Or 1 kilo = 1000
    var sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB"];
    var i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + " " + sizes[i];
}
  myRecordings() {
    this.sametime.getRecordings().subscribe((data: Array<Recording>) => {
      this.myRecordingList = data;
      this.myRecordingList.forEach((meeting) => {
        console.log(JSON.stringify(meeting));
        meeting.sizeNize=this.formatBytes(meeting.size,0);
        

      })
    })
  }

}
