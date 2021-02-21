import { ReturnStatement } from '@angular/compiler';
import { PipeCollector } from '@angular/compiler/src/template_parser/binding_parser';
import { Component, OnInit } from '@angular/core';
import { Requests } from '../models/requests';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestsService } from '../services/requests.service';

@Component({
  selector: 'app-update-request',
  templateUrl: './update-request.page.html',
  styleUrls: ['./update-request.page.scss'],
})
export class UpdateRequestPage implements OnInit {

  req: Requests[];
  requestUpdateForm: FormGroup;
  
  constructor(public fb: FormBuilder, 
    private RequestsService: RequestsService,
    private router: Router) {
    this.requestUpdateForm = this.fb.group({
      type: [''],
      reason: [''], 
      userEmail: [''], 
      startDate: [''],
      endDate: ['']
    });
  }

  ngOnInit() {
    this.getAllRequests();
    let id = this.RequestsService.getCurrentRequestId();

    this.RequestsService.getRequestById(id).subscribe((req) => { 
      console.log(req)
      this.requestUpdateForm = this.fb.group({
        type: req.type,
        reason: req.reason, 
        userEmail: req.userEmail, 
        startDate: req.startDate,
        endDate: req.endDate
      });
    })
  }

  getAllRequests(){
    this.RequestsService.getRequests().subscribe( req => {
      this.req = req;
    });
  }

  onFormSubmit() {
    if (!this.requestUpdateForm.valid) {
      
      return false;
      
    } else {
      console.log("pero");
      let id = this.RequestsService.getCurrentRequestId();
      let req = {
        id: null,
        type: this.requestUpdateForm.value.type,
        reason: this.requestUpdateForm.value.reason, 
        startDate: this.requestUpdateForm.value.startDate, 
        endDate: this.requestUpdateForm.value.endDate, 
        userEmail: this.requestUpdateForm.value.userEmail, 
        revised: this.requestUpdateForm.value.revised, 
      }
      this.RequestsService.updateRequest(id, req)
        .subscribe((res) => {
          this.router.navigateByUrl("/employee-requests");
        });
    }
  }

  return(){
    this.router.navigateByUrl("/employee-requests")
  }

}
