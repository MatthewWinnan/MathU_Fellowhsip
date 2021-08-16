import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeactivatePage } from './deactivate.page';

const routes: Routes = [
  {
    path: '',
    component: DeactivatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeactivatePageRoutingModule {}
