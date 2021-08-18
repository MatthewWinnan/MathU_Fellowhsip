import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddNewEmployeePageRoutingModule } from './add-new-employee-routing.module';
import { AddNewEmployeePage } from './add-new-employee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddNewEmployeePageRoutingModule
  ],
  declarations: [AddNewEmployeePage]
})
export class AddNewEmployeePageModule {}
