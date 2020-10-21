import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotpasswordPagePage } from './forgotpassword-page.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotpasswordPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotpasswordPagePageRoutingModule {}
