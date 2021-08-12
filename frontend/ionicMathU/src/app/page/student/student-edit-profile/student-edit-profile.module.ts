import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentEditProfilePageRoutingModule } from './student-edit-profile-routing.module';

import { ViewProfilePage } from './student-edit-profile.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    StudentEditProfilePageRoutingModule
  ],
  declarations: [ViewProfilePage]
})
export class EditStudentPageModule {}
