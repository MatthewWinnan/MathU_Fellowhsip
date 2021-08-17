import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ResolverService } from './service/resolver.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing-page', //to change default page
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
    path: 'landing-page',
    loadChildren: () => import('./page/landing-page/landing-page.module').then( m => m.LandingPagePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./page/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./page/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'student-view-profile',
    loadChildren: () => import('./page/student/student-view-profile/student-view-profile.module').then( m => m.ViewStudentPageModule)
  },
  {
    path: 'edit-bursary',
    loadChildren: () => import('./page/sponsor/edit-bursary/edit-bursary.module').then( m => m.EditBursaryPageModule)
  },
  {
    path: 'edit-bursary/:id',
    resolve:{ myData: ResolverService },
    loadChildren: () => import('./page/sponsor/edit-bursary/edit-bursary.module').then( m => m.EditBursaryPageModule)
  },
  {
    path: 'view-bursary',
    loadChildren: () => import('./page/sponsor/view-bursary/view-bursary.module').then( m => m.ViewBursaryPageModule)
  },
  {
    path: 'view-more-bursary',
    loadChildren: () => import('./page/sponsor/view-more-bursary/view-more-bursary.module').then( m => m.ViewMoreBursaryPageModule)
  },
  {
    path: 'view-more-bursary/:id',
    resolve: { myData: ResolverService },
    loadChildren: () => import('./page/sponsor/view-more-bursary/view-more-bursary.module').then( m => m.ViewMoreBursaryPageModule)
  },
  {
    path: 'view-applicants',
    loadChildren: () => import('./page/sponsor/view-applicants/view-applicants.module').then( m => m.ViewApplicantsPageModule)
  },
  {
    path: 'add-bursary',
    loadChildren: () => import('./page/sponsor/add-bursary/add-bursary.module').then( m => m.AddBursaryPageModule)
  },
  {
    path: 'edit-bursary',
    loadChildren: () => import('./page/sponsor/edit-bursary/edit-bursary.module').then( m => m.EditBursaryPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
