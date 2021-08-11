import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewBursaryPage } from './view-bursary.page';

const routes: Routes = [
  {
    path: '',
    component: ViewBursaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewBursaryPageRoutingModule {}
