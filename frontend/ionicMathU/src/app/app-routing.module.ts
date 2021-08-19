import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ResolverService } from './service/resolver.service';

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
    path: 'edit-profile',
    loadChildren: () => import('./page/sponsor/edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'view-employee',
    loadChildren: () => import('./page/sponsor/view-employee/view-employee.module').then( m => m.ViewEmployeePageModule)
  },
  {
    path: 'add-new-employee',
    loadChildren: () => import('./page/sponsor/add-new-employee/add-new-employee.module').then( m => m.AddNewEmployeePageModule)
  },
  {
    path: 'modify-employee-role',
    loadChildren: () => import('./page/sponsor/modify-employee-role/modify-employee-role.module').then( m => m.ModifyEmployeeRolePageModule)
  },
  {
    path: 'modify-employee-role/:id',
    resolve: { myData: ResolverService },
    loadChildren: () => import('./page/sponsor/modify-employee-role/modify-employee-role.module').then( m => m.ModifyEmployeeRolePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
