import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeetingPagePageRoutingModule } from './meeting-page-routing.module';

import { MeetingPagePage } from './meeting-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeetingPagePageRoutingModule
  ],
  declarations: [MeetingPagePage]
})
export class MeetingPagePageModule {}
