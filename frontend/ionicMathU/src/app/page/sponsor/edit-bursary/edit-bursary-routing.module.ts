import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditBursaryPage } from './edit-bursary.page';

const routes: Routes = [
  {
    path: '',
    component: EditBursaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditBursaryPageRoutingModule {}
