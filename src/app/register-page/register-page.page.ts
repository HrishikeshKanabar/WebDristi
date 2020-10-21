import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "../shared/authentication-service";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.page.html',
  styleUrls: ['./register-page.page.scss'],
})
export class RegisterPagePage implements OnInit {

  constructor(public authService: AuthenticationService,public router: Router) { }

  ngOnInit() {
  }

  signUp(fn,ln,email,pass,confPass){
    /*this.authService.RegisterUser(email.value,pass.value)      
    .then((res) => {
      // Do something here
    }).catch((error) => {
      window.alert(error.message)
    })*/

    this.authService.register(fn,ln,email,pass,confPass)
    .then( res => {
      console.log(res)
    }, err => {
      console.log(err)
    })


  }

}
