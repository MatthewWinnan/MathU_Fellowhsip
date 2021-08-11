import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentBasicInfoRoutingModule } from './student-basic-info-routing.module';

import { ViewProfilePage } from './student-basic-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentBasicInfoRoutingModule
  ],
  declarations: [ViewProfilePage]
})
export class StudentBasicInfoPageModule {}
