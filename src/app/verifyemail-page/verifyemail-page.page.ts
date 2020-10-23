import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../shared/authentication-service";
@Component({
  selector: 'app-verifyemail-page',
  templateUrl: './verifyemail-page.page.html',
  styleUrls: ['./verifyemail-page.page.scss'],
})
export class VerifyemailPagePage implements OnInit {

  constructor(public authService: AuthenticationService) { }

  ngOnInit() {
  }

}
