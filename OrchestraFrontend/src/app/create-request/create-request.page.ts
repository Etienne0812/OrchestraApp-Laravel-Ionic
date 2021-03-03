import { ReturnStatement } from '@angular/compiler';
import { PipeCollector } from '@angular/compiler/src/template_parser/binding_parser';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestsService } from '../services/requests.service';
import { AuthService } from '../services/auth/auth.service';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-create-request',
  templateUrl: './create-request.page.html',
  styleUrls: ['./create-request.page.scss'],
})
export class CreateRequestPage implements OnInit {
 
  private logged: boolean;
  requestCreateForm: FormGroup;
  
  constructor(public fb: FormBuilder, 
    private RequestsService: RequestsService,
    private UserService: UserService, 
    private AuthService: AuthService, 
    private router: Router) { 
      
    }
  ngOnInit() {
    this.requestCreateForm = this.fb.group({
      type: [null, [Validators.required]],
      reason: [null, [Validators.required, Validators.minLength(4)]], 
      startDate: [null, [Validators.required]], 
      endDate: [null, [Validators.required]]
    });
    this.logged = this.AuthService.isLogged();
  }

  submit() {
    if (!this.requestCreateForm.valid ) {
      console.log("awebo")
      return false;
      
    } else {
      console.log("olaaa")
      let req = {
        id: null,
        type: this.requestCreateForm.value.type,
        reason: this.requestCreateForm.value.reason, 
        startDate: this.requestCreateForm.value.startDate, 
        endDate: this.requestCreateForm.value.endDate, 
        userEmail: this.AuthService.email, 
        revised: this.requestCreateForm.value.revised, 
      }
      this.RequestsService.addRequest(req)
        .subscribe((res) => {
          this.router.navigateByUrl("/employee-requests");
        });
    } 
  }

  return(){
    this.router.navigateByUrl("/employee-requests");
  }
  

}
