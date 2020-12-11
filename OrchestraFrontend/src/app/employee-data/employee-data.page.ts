import { Component, OnInit } from '@angular/core';
import { Data } from '../models/data';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.page.html',
  styleUrls: ['./employee-data.page.scss'],
})
export class EmployeeDataPage implements OnInit {

  dat: Data[]

  constructor(private DataService: DataService, private router: Router) { }

  ngOnInit() {
    this.getAllData();
  }

  getAllData(){
    this.DataService.getData().subscribe( dat => {
      this.dat = dat;
      console.log(dat);
    });
  }

  return(){
    this.router.navigateByUrl("/tabs/tab2");
  }

}
