import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/Employee';
import { Router } from '@angular/router';
import { EmployeeServiceService } from '../services/employee-service.service';



@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.page.html',
  styleUrls: ['./employee-page.page.scss'],
})
export class EmployeePagePage implements OnInit {

empl: Employee[]

  constructor(private EmployeeService: EmployeeServiceService, private router: Router) { }

  ngOnInit() {
    this.getAllEmployees();
  }

  getAllEmployees(){
    this.EmployeeService.getEmployees().subscribe( empl => {
      this.empl = empl;
      console.log(empl);
    });
  }

  

}
