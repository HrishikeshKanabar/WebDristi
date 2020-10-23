import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifyemailPagePage } from './verifyemail-page.page';

const routes: Routes = [
  {
    path: '',
    component: VerifyemailPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerifyemailPagePageRoutingModule {}
