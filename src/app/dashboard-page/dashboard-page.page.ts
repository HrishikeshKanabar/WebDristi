import { Component, OnInit,Input } from '@angular/core';
import { AuthenticationService } from "../shared/authentication-service";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from "@angular/fire/auth";
import SimpleWebRTC from 'simplewebrtc'


@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.page.html',
  styleUrls: ['./dashboard-page.page.scss'],
})
export class DashboardPagePage implements OnInit {

  constructor(public authService: AuthenticationService,
    public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
    ) { }

  @Input()  name:string;

  ngOnInit() {
    var userData=JSON.parse(localStorage.getItem('user'));
    //console.log(userData.email);
  
    var test=this.afStore.collection('users',ref => ref.where('email', '==', userData.email)).snapshotChanges();
   

        test.subscribe(data=>{

          var posts = data.map(e => {
            return {
              id: e.payload.doc.id,
              fisrtName: e.payload.doc.data()['firstName'],
              lastName: e.payload.doc.data()['lastName'],
            };
          })
          //console.log(posts);
          this.name= posts[0].fisrtName+" "+posts[0].lastName
          
         });


           
        
          
      }
      
Signout(){

    this.authService.SignOut()
     

  }
}
