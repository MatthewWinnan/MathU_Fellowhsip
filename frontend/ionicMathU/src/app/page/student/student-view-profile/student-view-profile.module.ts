import { NgModule } from '@angular/core';
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
  declarations: [ViewProfilePage]
})
export class ViewStudentPageModule {}
