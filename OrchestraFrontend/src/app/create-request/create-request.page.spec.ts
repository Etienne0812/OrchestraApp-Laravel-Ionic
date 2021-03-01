import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ReturnStatement } from '@angular/compiler';
import { PipeCollector } from '@angular/compiler/src/template_parser/binding_parser';
import { Component, OnInit } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { RequestsService } from '../services/requests.service';
import { AuthService } from '../services/auth/auth.service';
import { IonicStorageModule} from '@ionic/storage'
import { UserService } from '../services/user.service';
import { User } from '../models/user';

import { CreateRequestPage } from './create-request.page';
import { HttpClient } from '@angular/common/http';

describe('CreateRequestPage', () => {
  let component: CreateRequestPage;
  let fixture: ComponentFixture<CreateRequestPage>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRequestPage ],
      imports: [
        IonicModule.forRoot(), 
        ReactiveFormsModule, 
        HttpClientTestingModule,
        IonicStorageModule.forRoot(),
        RouterModule.forRoot(
          [
            {
              path: '',
              component: CreateRequestPage
            }
          ]
        ),

      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateRequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  
});


