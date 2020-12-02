import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeeRequestsPageRoutingModule } from './employee-requests-routing.module';

import { EmployeeRequestsPage } from './employee-requests.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeeRequestsPageRoutingModule
  ],
  declarations: [EmployeeRequestsPage]
})
export class EmployeeRequestsPageModule {}
