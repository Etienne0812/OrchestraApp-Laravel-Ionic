import { ReturnStatement } from '@angular/compiler';
import { PipeCollector } from '@angular/compiler/src/template_parser/binding_parser';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestsService } from '../services/requests.service';

@Component({
  selector: 'app-create-request',
  templateUrl: './create-request.page.html',
  styleUrls: ['./create-request.page.scss'],
})
export class CreateRequestPage implements OnInit {

  requestCreateForm: FormGroup;

  constructor(public fb: FormBuilder, 
    private RequestsService: RequestsService,
    private router: Router) { 
      this.requestCreateForm = this.fb.group({
        type: ['', [Validators.required, Validators.minLength(4)]],
        reason: ['', [Validators.required, Validators.minLength(4)]], 
        employeeId: ['', [Validators.required]], 
        startDate: ['', [Validators.required]], 
        endDate: ['', [Validators.required]]
      });
    }

  ngOnInit() {
  }

  onFormSubmit() {
    if (!this.requestCreateForm.valid) {
      return false;
      
    } else {
      let req = {
        id: null,
        type: this.requestCreateForm.value.type,
        reason: this.requestCreateForm.value.reason, 
        startDate: this.requestCreateForm.value.startDate, 
        endDate: this.requestCreateForm.value.endDate, 
        employeeId: this.requestCreateForm.value.employeeId, 
        revised: this.requestCreateForm.value.revised, 
      }
      this.RequestsService.addRequest(req)
        .subscribe((res) => {
          this.router.navigateByUrl("/employee-requests");
        });
    }
  }

}
