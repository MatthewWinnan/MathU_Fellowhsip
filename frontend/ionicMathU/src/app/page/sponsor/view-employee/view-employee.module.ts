import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ViewEmployeePageRoutingModule } from './view-employee-routing.module';
import { ViewEmployeePage } from './view-employee.page';
import { MenuComponent } from '../../../component/menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewEmployeePageRoutingModule
  ],
  declarations: [
    ViewEmployeePage,
    MenuComponent
  ]
})
export class ViewEmployeePageModule {}
