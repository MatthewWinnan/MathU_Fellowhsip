import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShortlistPage } from './shortlist.page';

const routes: Routes = [
  {
    path: '',
    component: ShortlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShortlistPageRoutingModule {}
