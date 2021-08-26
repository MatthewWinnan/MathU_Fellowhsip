import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login', //to change default page
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'view-profile',
    loadChildren: () => import('./page/sponsor/view-profile/view-profile.module').then( m => m.ViewProfilePageModule)
  },
  {
    path: 'student-home',
    loadChildren: () => import('./page/student/student-home/student-home.module').then( m => m.StudentHomePageModule)
  },
  {
    path: 'student-home/:id',
    loadChildren: () => import('./page/student/student-home/student-home.module').then( m => m.StudentHomePageModule)
  },
  {
    path: 'shortlist',
    loadChildren: () => import('./page/student/shortlist/shortlist.module').then( m => m.ShortlistPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
