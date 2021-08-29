import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewMoreBursaryPage } from './view-more-bursary.page';

const routes: Routes = [
  {
    path: '',
    component: ViewMoreBursaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewMoreBursaryPageRoutingModule {}
