import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LoginPage } from './login.page';
import { FormsModule, ReactiveFormsModule,FormBuilder } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { BrowserModule, By } from '@angular/platform-browser';
import { DebugElement, NgModule } from '@angular/core';
import { IonicStorageModule} from '@ionic/storage';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [IonicModule.forRoot(),
        HttpClientModule,
        BrowserModule,
        IonicStorageModule.forRoot(),
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        RouterModule.forRoot(
          [
            {
              path: '',
              component: LoginPage
            }
          ]
        ),
    ]
    }).compileComponents();
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should detect form is valid', () => {
    fixture.nativeElement.querySelector('button').click();

    expect(component.login2()).toEqual('invalid_form');
  });

  it('should validate correct user and password', () => {
    component.loginForm = formBuilder.group({
      email: 'aaron@gmail.com',
      password: 'aaron'
    });
    fixture.nativeElement.querySelector('button').click();

    expect(component.login2()).toEqual('login_valid');
  });

  it('should deny access with incorrect password', () => {
    component.loginForm = formBuilder.group({
      email: 'test@test.com',
      password: '123'
    });
    fixture.nativeElement.querySelector('button').click();

    expect(component.login2()).toEqual('login_invalid');
  });
});
