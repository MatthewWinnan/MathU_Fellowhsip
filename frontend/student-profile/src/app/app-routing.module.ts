import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentBasicComponent } from './student-basic/student-basic.component';
import { StudentSubjectsComponent } from './student-subjects/student-subjects.component';
import { StudentEducationComponent } from './student-education/student-education.component';

const appRoutes: Routes = [
  { path: 'student-basic', component: StudentBasicComponent },
  { path: 'student-education', component: StudentSubjectsComponent },
  { path: 'student-subjects', component: StudentEducationComponent },
  { path: '',   redirectTo: '/student-basic', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
