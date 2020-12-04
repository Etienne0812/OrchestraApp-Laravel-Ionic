import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateRequestPage } from './update-request.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateRequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateRequestPageRoutingModule {}
