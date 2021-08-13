import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewApplicantsPageRoutingModule } from './view-applicants-routing.module';

import { ViewApplicantsPage } from './view-applicants.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewApplicantsPageRoutingModule
  ],
  declarations: [ViewApplicantsPage]
})
export class ViewApplicantsPageModule {}
