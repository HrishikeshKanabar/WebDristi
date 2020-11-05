import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardCardsPageRoutingModule } from './dashboard-cards-routing.module';

import { DashboardCardsPage } from './dashboard-cards.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardCardsPageRoutingModule
  ],
  declarations: [DashboardCardsPage]
})
export class DashboardCardsPageModule {}
