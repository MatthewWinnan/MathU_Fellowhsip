import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentViewProfilePageRoutingModule } from './student-view-profile-routing.module';

import { ViewProfilePage } from './student-view-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentViewProfilePageRoutingModule
  ],
  declarations: [ViewProfilePage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ViewStudentPageModule {}
