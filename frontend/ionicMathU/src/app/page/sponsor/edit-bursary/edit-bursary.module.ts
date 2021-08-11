import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditBursaryPageRoutingModule } from './edit-bursary-routing.module';

import { EditBursaryPage } from './edit-bursary.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    EditBursaryPageRoutingModule
  ],
  declarations: [EditBursaryPage]
})
export class EditBursaryPageModule {}
