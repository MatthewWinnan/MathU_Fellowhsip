import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModifyEmployeeRolePageRoutingModule } from './modify-employee-role-routing.module';
import { ModifyEmployeeRolePage } from './modify-employee-role.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ModifyEmployeeRolePageRoutingModule
  ],
  declarations: [ModifyEmployeeRolePage]
})
export class ModifyEmployeeRolePageModule {}
