import { Component, Input, OnInit } from '@angular/core';
import SimpleWebRTC from 'simplewebrtc'
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.page.html',
  styleUrls: ['./create-room.page.scss'],
})
export class CreateRoomPage implements OnInit {

   @Input() togglePersonalId=false;
   @Input() toggleVideo=false;
   @Input() userData;
   @Input() personalId;
  constructor(public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth) { }

  ngOnInit() {
  }
  
  
  createRoom(){

    var isPersonalRoomId= this.togglePersonalId 
    var isTurnVideo=this.toggleVideo

  

    console.log("Personal room ID: "+isPersonalRoomId+ " video: "+isTurnVideo);
    
    if(isPersonalRoomId==false){
    var randomRoomId:number= Math.random();
     this.personalId=Math.trunc(randomRoomId*1000000000);
     console.log("Personal room ID: "+this.personalId);
    }

    if(isPersonalRoomId){
      this.ngFireAuth.authState.subscribe(user => {
        if (user) {
          this.userData = user;
          
          //console.log("USER"+JSON.stringify(user));
          this.personalId=user.uid;
          console.log("Personal room ID: "+this.personalId);
        } 
      })
    }


   
  
  }


}
