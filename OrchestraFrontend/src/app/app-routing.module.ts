import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'employee-page',
    loadChildren: () => import('./employee-page/employee-page.module').then( m => m.EmployeePagePageModule)
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
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
