import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninPagePage } from './signin-page.page';

const routes: Routes = [
  {
    path: '',
    component: SigninPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SigninPagePageRoutingModule {}
