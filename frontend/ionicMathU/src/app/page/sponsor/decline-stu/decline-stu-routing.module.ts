import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeclineStuPage } from './decline-stu.page';

const routes: Routes = [
  {
    path: '',
    component: DeclineStuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeclineStuPageRoutingModule {}
