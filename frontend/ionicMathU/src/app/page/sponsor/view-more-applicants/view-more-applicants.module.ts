import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewMoreApplicantsPageRoutingModule } from './view-more-applicants-routing.module';

import { ViewMoreApplicantsPage } from './view-more-applicants.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewMoreApplicantsPageRoutingModule
  ],
  declarations: [ViewMoreApplicantsPage]
})
export class ViewMoreApplicantsPageModule {}
