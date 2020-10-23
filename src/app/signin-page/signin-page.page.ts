import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "../shared/authentication-service";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.page.html',
  styleUrls: ['./signin-page.page.scss'],
})
export class SigninPagePage implements OnInit {

  constructor(
    public authService: AuthenticationService,
    public router: Router,private alertCtrl: AlertController) {}

  ngOnInit() {
  }


  logIn(email,pass){

    this.authService.SignIn(email.value, pass.value)
      .then((res) => {

        
        if(this.authService.isEmailVerified) {
          console.log("LOGIN SUCESSFUL");
          this.router.navigate(['dashboard-page']);          
        } else {
          //window.alert('Email is not verified')
          this.presentAlert('Email is not verified');
          return false;
        }
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
