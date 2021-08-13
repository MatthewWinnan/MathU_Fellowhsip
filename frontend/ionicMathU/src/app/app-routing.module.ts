import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
  },  {
    path: 'logout',
    loadChildren: () => import('./page/logout/logout.module').then( m => m.LogoutPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
