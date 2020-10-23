import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifyemailPagePageRoutingModule } from './verifyemail-page-routing.module';

import { VerifyemailPagePage } from './verifyemail-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifyemailPagePageRoutingModule
  ],
  declarations: [VerifyemailPagePage]
})
export class VerifyemailPagePageModule {}
