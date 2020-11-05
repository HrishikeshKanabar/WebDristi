import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPagePageRoutingModule } from './dashboard-page-routing.module';

import { DashboardPagePage } from './dashboard-page.page';

import {DashboardCardsPage} from '../dashboard-cards/dashboard-cards.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPagePageRoutingModule
  ],
  declarations: [DashboardPagePage,DashboardCardsPage]
})
export class DashboardPagePageModule {}
