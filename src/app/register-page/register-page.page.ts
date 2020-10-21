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
      window.alert(error.message)
    })


  }

}
