import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewApplicantsPage } from './view-applicants.page';

const routes: Routes = [
  {
    path: '',
    component: ViewApplicantsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewApplicantsPageRoutingModule {}
