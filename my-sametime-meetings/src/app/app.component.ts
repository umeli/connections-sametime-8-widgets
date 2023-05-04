import { Component,OnInit ,Output} from '@angular/core';
import { SametimeMeetingsServiceService } from './services/sametime-meetings-service.service';
import {SametimeAuthServiceService} from './services/sametime-auth-service.service';

import { SametimeMeeting } from './interfaces/sametimeMeeting/sametimemeeting';
import { SametimeUser, SametimeAuth } from './interfaces/sametimeMeeting/sametimeuser';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'My Meetings';
  constructor (private sametime:SametimeMeetingsServiceService,private auth:SametimeAuthServiceService){
  }
  @Output() myMeetingList: SametimeMeeting[]=[];
  @Output() meetingBase: String="https://dosam.collab.cloud/meeting";
  
  ngOnInit(){
    //this.myMeetings();
    this.refreshAuth();
  }
  refreshAuth(){
    this.auth.refreshToken().subscribe((data:SametimeAuth)=>{
      console.log(JSON.stringify(data));
      this.myMeetings();

    });
  }

  myMeetings(){
    this.sametime.getMeetings().subscribe((data:Array<SametimeMeeting>)=>{
      this.myMeetingList=data;   
      this.myMeetingList.forEach((meeting)=>{
        meeting.title=meeting.name;
        if (meeting.name.startsWith("MeetMe")){
          meeting.title="My Meeting";
        }
      })
    })
  }

}
