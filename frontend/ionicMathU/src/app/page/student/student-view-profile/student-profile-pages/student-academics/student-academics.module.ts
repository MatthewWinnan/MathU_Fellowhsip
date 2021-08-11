import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentAcademicsRoutingModule } from './student-academics-routing.module';

import { ViewProfilePage } from './student-academics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentAcademicsRoutingModule
  ],
  declarations: [ViewProfilePage]
})
export class StudentAcademicsPageModule {}
