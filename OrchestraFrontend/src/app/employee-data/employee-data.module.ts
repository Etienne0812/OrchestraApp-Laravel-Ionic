import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeeDataPageRoutingModule } from './employee-data-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

import { EmployeeDataPage } from './employee-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeeDataPageRoutingModule,
    MatFormFieldModule,
    MatButtonModule, 
    MatCheckboxModule, 
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ],
  declarations: [EmployeeDataPage]
})
export class EmployeeDataPageModule {}
