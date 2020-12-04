import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateRequestPageRoutingModule } from './update-request-routing.module';

import { UpdateRequestPage } from './update-request.page';

@NgModule({
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    UpdateRequestPageRoutingModule
  ],
  declarations: [UpdateRequestPage]
})
export class UpdateRequestPageModule {}
