import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "../shared/authentication-service";

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.page.html',
  styleUrls: ['./signin-page.page.scss'],
})
export class SigninPagePage implements OnInit {

  constructor(
    public authService: AuthenticationService,
    public router: Router) {}

  ngOnInit() {
  }


  logIn(email,pass){

    this.authService.SignIn(email.value, pass.value)
      .then((res) => {

        console.log("LOGIN SUCESSFUL");
        /*if(this.authService.isEmailVerified) {
          this.router.navigate(['dashboard']);          
        } else {
          window.alert('Email is not verified')
          return false;
        }*/
      }).catch((error) => {
        window.alert(error.message)
      })

  }
}
