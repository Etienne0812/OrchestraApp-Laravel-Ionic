import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeStatusPage } from './employee-status.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeeStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeStatusPageRoutingModule {}
