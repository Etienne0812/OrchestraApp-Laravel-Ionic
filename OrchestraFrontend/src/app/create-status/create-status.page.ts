import { ReturnStatement } from '@angular/compiler';
import { PipeCollector } from '@angular/compiler/src/template_parser/binding_parser';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StatusService } from '../services/status.service';

@Component({
  selector: 'app-create-status',
  templateUrl: './create-status.page.html',
  styleUrls: ['./create-status.page.scss'],
})
export class CreateStatusPage implements OnInit {

  statusCreateForm: FormGroup

  constructor(public fb: FormBuilder, 
    private StatusService: StatusService,
    private router: Router) { 
      this.statusCreateForm = this.fb.group({
        type: ['', [Validators.required, Validators.minLength(4)]],
        userEmail: ['', [Validators.required]], 
        startDate: ['', [Validators.required]], 
        endDate: ['', [Validators.required]]
      });
    }

  ngOnInit() {
  }

  onFormSubmit() {
    if (!this.statusCreateForm.valid) {
      return false;
      
    } else {
      let sta = {
        id: null,
        type: this.statusCreateForm.value.type,
        startDate: this.statusCreateForm.value.startDate, 
        endDate: this.statusCreateForm.value.endDate, 
        userEmail: this.statusCreateForm.value.userEmail,  
      }
      this.StatusService.addStatus(sta)
        .subscribe((res) => {
          this.router.navigateByUrl("/employee-status");
        });
    }
  }

  return(){
    this.router.navigateByUrl("/employee-status");
  }

}
