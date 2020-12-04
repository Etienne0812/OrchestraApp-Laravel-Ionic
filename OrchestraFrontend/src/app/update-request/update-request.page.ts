import { ReturnStatement } from '@angular/compiler';
import { PipeCollector } from '@angular/compiler/src/template_parser/binding_parser';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestsService } from '../services/requests.service';

@Component({
  selector: 'app-update-request',
  templateUrl: './update-request.page.html',
  styleUrls: ['./update-request.page.scss'],
})
export class UpdateRequestPage implements OnInit {

  requestUpdateForm: FormGroup;
  

  constructor(public fb: FormBuilder, 
    private RequestsService: RequestsService,
    private router: Router) {
    this.requestUpdateForm = this.fb.group({
      type: ['', [Validators.required, Validators.minLength(4)]],
      reason: ['', [Validators.required, Validators.minLength(4)]], 
      employeeId: ['', [Validators.minLength(4)]], 
      startDate: ['', [Validators.minLength(4)]], 
      endDate: ['', [Validators.minLength(4)]]
    });
  }

  ngOnInit() {
  }

  onFormSubmit() {
    if (!this.requestUpdateForm.valid) {
      return false;
      
    } else {
      let req = {
        id: null,
        type: this.requestUpdateForm.value.type,
        reason: this.requestUpdateForm.value.reason, 
        startDate: this.requestUpdateForm.value.startDate, 
        endDate: this.requestUpdateForm.value.endDate, 
        employeeId: this.requestUpdateForm.value.employeeId, 
        revised: this.requestUpdateForm.value.revised, 
      }
      this.RequestsService.addRequest(req)
        .subscribe((res) => {
          this.router.navigateByUrl("/employee-requests");
        });
    }
  }

}
