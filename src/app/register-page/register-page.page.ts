import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "../shared/authentication-service";
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.page.html',
  styleUrls: ['./register-page.page.scss'],
})
export class RegisterPagePage implements OnInit {

  constructor(public authService: AuthenticationService,public router: Router,private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  signUp(fn,ln,email,pass,confPass){

    
    if(pass.value!==confPass.value && pass.value.length>=6 && confPass.value.length>=6 ){
      console.log(1);

      this.presentAlert("Password do not match !");
    
    }else if(confPass.value.length<6 || pass.value.length<6){
      console.log(2);
      this.presentAlert("Password should be atleast 6 characters");
    }else{

      console.log(3);
       // Data from here goes to authentication
          this.authService.RegisterUser(email.value,pass.value)      
        .then((res) => {
          console.log('USER REGISTRATION DONE WITH AUTH');


        // Data from here goes to user collection of cloud fire store
        // if Auth is sucessful then only allow to store user details

          this.authService.register(fn,ln,false,email)
          .then( res => {
            console.log('USER DETAILS SAVED IN COLLECTION: '+
            'First Name:'+fn.value+
            'Last Name:'+ln.value+
            'Email:'+email.value
            );
          }, err => {
            console.log(err)
          })
          
        }).catch((error) => {
          //window.alert(error.message)
          this.presentAlert(error.message);
        })

    }


    
    
    


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
