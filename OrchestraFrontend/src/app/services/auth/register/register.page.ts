import { ReturnStatement } from '@angular/compiler';
import { PipeCollector } from '@angular/compiler/src/template_parser/binding_parser';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';
import { DataService } from '../../data.service';
import { StatusService } from '../../status.service';
import { AuthService } from '../auth.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registForm: FormGroup;
  private role: number;

  constructor(public fb: FormBuilder, 
    private UserService: UserService,
    private DataService: DataService,
    private StatusService: StatusService,
    private AuthService: AuthService, 
    private router: Router) {
      this.registForm = this.fb.group({
        email: ['', [Validators.required, Validators.minLength(4)]],
        password: ['', [Validators.required, Validators.minLength(4)]], 
        cpassword: ['', [Validators.required, Validators.minLength(4)]],
        admin: [false],
      });
     }

  ngOnInit() {
    
  }

  

  onFormSubmit() {
    if (!this.registForm.valid) {
      return false;
      
    } else {
      console.log("toiaqui")
      if(this.registForm.value.admin){
        this.role = 2;
      } else {
        this.role = 1;
      }
      let usr = {
        id: null,
        email: this.registForm.value.email,
        password: this.registForm.value.password, 
        password_confirmation: this.registForm.value.cpassword, 
        role: this.role
      }
      this.AuthService.addUser(usr)
        .subscribe((res) => {
          this.router.navigateByUrl("/tabs/tab1");
        });
      let dat = {
        id: null,
        DNI: "A definir",
        name: "A definir", 
        firstSurname: "A definir", 
        secondSurname: "A definir", 
        phone: "A definir",  
        userEmail: this.registForm.value.email
      }
      this.DataService.addData(dat)
        .subscribe((res) => {
          this.router.navigateByUrl("/tabs/tab1");
        });
      let sta = {
        id: null, 
        type: 'Presencial', 
        startDate: 'A revisar', 
        endDate: 'A revisar', 
        userEmail: this.registForm.value.email
      }
      this.StatusService.addStatus(sta)
        .subscribe((res) => {
          this.router.navigateByUrl("/tabs/tab1");
        });
    }
  }
  return(){
    this.router.navigateByUrl("/tabs/tab2");
  }

}
