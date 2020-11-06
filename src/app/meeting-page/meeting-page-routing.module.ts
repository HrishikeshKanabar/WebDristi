import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeetingPagePage } from './meeting-page.page';

const routes: Routes = [
  {
    path: '',
    component: MeetingPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeetingPagePageRoutingModule {}
