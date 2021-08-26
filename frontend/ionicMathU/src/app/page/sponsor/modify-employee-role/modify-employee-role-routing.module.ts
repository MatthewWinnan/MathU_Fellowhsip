import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifyEmployeeRolePage } from './modify-employee-role.page';

const routes: Routes = [
  {
    path: '',
    component: ModifyEmployeeRolePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifyEmployeeRolePageRoutingModule {}
