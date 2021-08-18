import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcceptStuPage } from './accept-stu.page';

const routes: Routes = [
  {
    path: '',
    component: AcceptStuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcceptStuPageRoutingModule {}
