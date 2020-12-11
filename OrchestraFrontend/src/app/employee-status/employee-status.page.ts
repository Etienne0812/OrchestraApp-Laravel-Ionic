import { Component, OnInit } from '@angular/core';
import { Status } from '../models/status';
import { Router } from '@angular/router';
import { StatusService } from '../services/status.service';

@Component({
  selector: 'app-employee-status',
  templateUrl: './employee-status.page.html',
  styleUrls: ['./employee-status.page.scss'],
})
export class EmployeeStatusPage implements OnInit {

  sta: Status[];

  constructor(private StatusService: StatusService, private router: Router) { }

  ngOnInit() {
    this.getAllStatuses();
  }

  ionViewWillEnter(){
    this.getAllStatuses();
  }

  getAllStatuses(){
    this.StatusService.getStatus().subscribe( sta => {
      this.sta = sta;
    });
  }

  insertStatus(){
    this.router.navigateByUrl("/create-status");
  }

  updateStatus(id: number){
    this.StatusService.setCurrentStatusId(id);
    this.router.navigateByUrl("/update-status");
  }

  return(){
    this.router.navigateByUrl("/tabs/tab1");
  }

}
