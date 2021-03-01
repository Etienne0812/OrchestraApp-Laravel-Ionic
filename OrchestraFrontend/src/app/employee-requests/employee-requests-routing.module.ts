import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeRequestsPage } from './employee-requests.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeeRequestsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRequestsPageRoutingModule {}
