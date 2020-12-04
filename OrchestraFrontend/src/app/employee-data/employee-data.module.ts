import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeeDataPageRoutingModule } from './employee-data-routing.module';

import { EmployeeDataPage } from './employee-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeeDataPageRoutingModule
  ],
  declarations: [EmployeeDataPage]
})
export class EmployeeDataPageModule {}
