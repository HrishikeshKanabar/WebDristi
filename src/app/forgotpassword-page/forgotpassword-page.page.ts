import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../shared/authentication-service";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-forgotpassword-page',
  templateUrl: './forgotpassword-page.page.html',
  styleUrls: ['./forgotpassword-page.page.scss'],
})
export class ForgotpasswordPagePage implements OnInit {

  constructor(public authService: AuthenticationService,
    private alertCtrl: AlertController
    ) { }

  ngOnInit() {
  }

  passwordReset(email){
      this.authService.PasswordRecover(email.value).then((res) => {
        this.presentAlert("Recovery mail sent to your email");
      }).catch((error) => {
        //window.alert(error.message)
        this.presentAlert(error.message);
      })
  }

  async presentAlert(errorMessage) {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      message: errorMessage,
      buttons: ['OK']
    });

    await alert.present();
  }

}
