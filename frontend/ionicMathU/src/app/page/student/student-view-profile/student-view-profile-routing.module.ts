import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewProfilePage } from './student-view-profile.page';

const routes: Routes = [
  {
    path: '',
    component: ViewProfilePage
  },
  {
    path: 'student-academics',
    loadChildren: () => import('./student-profile-pages/student-academics/student-academics.module').then( m => m.StudentAcademicsPageModule)
  },
  {
    path: 'student-basic-info',
    loadChildren: () => import('./student-profile-pages/student-basic-info/student-basic-info.module').then( m => m.StudentBasicInfoPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentViewProfilePageRoutingModule {}
