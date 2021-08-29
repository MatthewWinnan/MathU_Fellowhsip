import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewMoreApplicantsPage } from './view-more-applicants.page';

const routes: Routes = [
  {
    path: '',
    component: ViewMoreApplicantsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewMoreApplicantsPageRoutingModule {}
