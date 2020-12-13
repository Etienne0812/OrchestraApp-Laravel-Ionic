import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'employee-requests',
    loadChildren: () => import('./employee-requests/employee-requests.module').then( m => m.EmployeeRequestsPageModule)
  },
  {
    path: 'create-request',
    loadChildren: () => import('./create-request/create-request.module').then( m => m.CreateRequestPageModule)
  },
  {
    path: 'update-request',
    loadChildren: () => import('./update-request/update-request.module').then( m => m.UpdateRequestPageModule)
  },
  {
    path: 'employee-data',
    loadChildren: () => import('./employee-data/employee-data.module').then( m => m.EmployeeDataPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./services/auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./services/auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'employee-status',
    loadChildren: () => import('./employee-status/employee-status.module').then( m => m.EmployeeStatusPageModule)
  },
  {
    path: 'create-status',
    loadChildren: () => import('./create-status/create-status.module').then( m => m.CreateStatusPageModule)
  },
  {
    path: 'update-status',
    loadChildren: () => import('./update-status/update-status.module').then( m => m.UpdateStatusPageModule)
  },
  {
    path: 'you-are-logged-in',
    loadChildren: () => import('./you-are-logged-in/you-are-logged-in.module').then( m => m.YouAreLoggedInPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
