import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddBursaryPage } from './add-bursary.page';

const routes: Routes = [
  {
    path: '',
    component: AddBursaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddBursaryPageRoutingModule {}
