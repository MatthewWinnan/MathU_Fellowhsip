import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentBasicRoutingModule } from './student-basic-routing.module';
import { StudentBasicComponent } from './student-basic.component';


@NgModule({
  declarations: [
  StudentBasicComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    StudentBasicRoutingModule
  ]
})
export class StudentBasicModule { }
