import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardCardsPage } from './dashboard-cards.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardCardsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardCardsPageRoutingModule {}
