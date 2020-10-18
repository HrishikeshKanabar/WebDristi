import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SigninPagePageRoutingModule } from './signin-page-routing.module';

import { SigninPagePage } from './signin-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SigninPagePageRoutingModule
  ],
  declarations: [SigninPagePage]
})
export class SigninPagePageModule {}
