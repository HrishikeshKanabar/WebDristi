import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotpasswordPagePageRoutingModule } from './forgotpassword-page-routing.module';

import { ForgotpasswordPagePage } from './forgotpassword-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotpasswordPagePageRoutingModule
  ],
  declarations: [ForgotpasswordPagePage]
})
export class ForgotpasswordPagePageModule {}
