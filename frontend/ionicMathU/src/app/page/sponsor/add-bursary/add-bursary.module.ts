import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddBursaryPageRoutingModule } from './add-bursary-routing.module';

import { AddBursaryPage } from './add-bursary.page';

@NgModule({
  imports: [
    CommonModule,
    //FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddBursaryPageRoutingModule
  ],
  declarations: [AddBursaryPage]
})
export class AddBursaryPageModule {}
