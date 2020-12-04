import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeDataPage } from './employee-data.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeeDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeDataPageRoutingModule {}
