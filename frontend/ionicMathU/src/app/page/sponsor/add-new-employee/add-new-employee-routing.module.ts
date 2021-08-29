import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNewEmployeePage } from './add-new-employee.page';

const routes: Routes = [
  {
    path: '',
    component: AddNewEmployeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNewEmployeePageRoutingModule {}
