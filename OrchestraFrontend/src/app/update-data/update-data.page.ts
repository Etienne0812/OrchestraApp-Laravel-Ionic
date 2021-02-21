import { ReturnStatement } from '@angular/compiler';
import { PipeCollector } from '@angular/compiler/src/template_parser/binding_parser';
import { Component, OnInit } from '@angular/core';
import { Data } from '../models/data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-update-data',
  templateUrl: './update-data.page.html',
  styleUrls: ['./update-data.page.scss'],
})
export class UpdateDataPage implements OnInit {
  dat: Data[];
  dataUpdateForm: FormGroup;

  constructor(public fb: FormBuilder, private DataService: DataService, 
    private router: Router) { 
    this.dataUpdateForm = this.fb.group({
      DNI: [''], 
      name: [''], 
      firstSurname: [''], 
      secondSurname: [''], 
      phone: [''], 
      userEmail: ['']
    });
  }

  ngOnInit() {
    this.getAllData();
    let id = this.DataService.getCurrentDataId();

    this.DataService.getDataById(id).subscribe((dat) => { 
      this.dataUpdateForm = this.fb.group({
        DNI: dat.DNI,
        name: dat.name, 
        firstSurname: dat.firstSurname, 
        secondSurname: dat.secondSurname,
        phone: dat.phone,
        userEmail: dat.userEmail
      });
    })
  }

  getAllData(){
    this.DataService.getData().subscribe( dat => {
      this.dat = dat;
    });
  }

  onFormSubmit() {
    if (!this.dataUpdateForm.valid) {
      
      return false;
      
    } else {
      console.log("pero");
      let id = this.DataService.getCurrentDataId();
      let dat = {
        id: null,
        DNI: this.dataUpdateForm.value.DNI,
        name: this.dataUpdateForm.value.name, 
        firstSurname: this.dataUpdateForm.value.firstSurname, 
        secondSurname: this.dataUpdateForm.value.secondSurname, 
        userEmail: this.dataUpdateForm.value.userEmail, 
        phone: this.dataUpdateForm.value.phone, 
      }
      this.DataService.updateData(id, dat)
        .subscribe((dat) => {
          this.router.navigateByUrl("/employee-data");
        });
    }
  }

  return(){
    this.router.navigateByUrl("/employee-data")
  }

}
