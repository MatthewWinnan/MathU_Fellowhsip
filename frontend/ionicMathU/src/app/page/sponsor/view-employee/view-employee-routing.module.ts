import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewEmployeePage } from './view-employee.page';

const routes: Routes = [
  {
    path: '',
    component: ViewEmployeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewEmployeePageRoutingModule {}
