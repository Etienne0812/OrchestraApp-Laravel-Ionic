import { ReturnStatement } from '@angular/compiler';
import { PipeCollector } from '@angular/compiler/src/template_parser/binding_parser';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  usr: User[]
  constructor(public fb: FormBuilder, 
    private UserService: UserService,
    private router: Router) { 
      this.loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.minLength(4)]],
        password: ['', [Validators.required, Validators.minLength(4)]]
      });
    }

  ngOnInit() {
    this.test();
  }

  test(){
    this.UserService.getUser().subscribe( usr => {
      this.usr = usr;
      console.log(usr);
    });
  }

  onFormSubmit() {
    if (!this.loginForm.valid) {
      return false;
      
    } else {
      let usr = {
        id: null,
        email: this.loginForm.value.email,
        password: this.loginForm.value.password, 
        password_confirmation: null,
        role: null, 
      }
      this.UserService.login(usr)
        .subscribe((res) => {
          this.router.navigateByUrl("/login");
        });
    }
  }

}
