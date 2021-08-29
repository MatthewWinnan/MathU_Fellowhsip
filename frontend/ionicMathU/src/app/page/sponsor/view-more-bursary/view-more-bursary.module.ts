import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewMoreBursaryPageRoutingModule } from './view-more-bursary-routing.module';

import { ViewMoreBursaryPage } from './view-more-bursary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewMoreBursaryPageRoutingModule
  ],
  declarations: [ViewMoreBursaryPage]
})
export class ViewMoreBursaryPageModule {}
