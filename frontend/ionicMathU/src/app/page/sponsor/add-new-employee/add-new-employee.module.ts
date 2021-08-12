import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNewEmployeePageRoutingModule } from './add-new-employee-routing.module';

import { AddNewEmployeePage } from './add-new-employee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNewEmployeePageRoutingModule
  ],
  declarations: [AddNewEmployeePage]
})
export class AddNewEmployeePageModule {}
