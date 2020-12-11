import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeeStatusPageRoutingModule } from './employee-status-routing.module';

import { EmployeeStatusPage } from './employee-status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeeStatusPageRoutingModule
  ],
  declarations: [EmployeeStatusPage]
})
export class EmployeeStatusPageModule {}
