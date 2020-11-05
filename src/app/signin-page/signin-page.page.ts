import { Component, OnInit,Input } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "../shared/authentication-service";
import { AlertController } from '@ionic/angular';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.page.html',
  styleUrls: ['./signin-page.page.scss'],
})
export class SigninPagePage implements OnInit {

@Input() userData:Boolean;

  constructor(
    public authService: AuthenticationService,
    public router: Router,private alertCtrl: AlertController,
    public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth) {}

  ngOnInit() {
  }


  logIn(email,pass){

    this.authService.SignIn(email.value, pass.value)
      .then((res) => {


        // to check email verified or not

        
        this.ngFireAuth.authState.subscribe(user => {
          if (user) {
            this.userData = user.emailVerified
            
            //console.log("Email verified inside ?:"+this.userData);

            if(this.userData) {
              //console.log("LOGIN SUCESSFUL");
              this.router.navigate(['dashboard-page']);          
            } else {
              //window.alert('Email is not verified')
              this.presentAlert('Email is not verified');
              return false;
            }

          } 
        })
      
      }).catch((error) => {
        //window.alert(error.message)
        this.presentAlert(error.message);
      })

  }


  async presentAlert(errorMessage) {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Warning',
      message: errorMessage,
      buttons: ['OK']
    });

    await alert.present();
  }
}
