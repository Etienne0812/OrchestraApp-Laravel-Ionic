import { Component, OnInit } from '@angular/core';
import { Data } from '../models/data';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.page.html',
  styleUrls: ['./employee-data.page.scss'],
})
export class EmployeeDataPage implements OnInit {

  dat: Data[]
  private email: string;
  admin :boolean;

  constructor(private DataService: DataService, private AuthService: AuthService, private router: Router) { }

  ngOnInit() {
    this.admin = this.AuthService.isAdmin();
    this.isAdmin();
  }

  getAllData(){
    this.DataService.getData().subscribe( dat => {
      this.dat = dat;
    });
  }

  getDataByEmail(email: string){
    this.DataService.getDataByEmail(email).subscribe( dat => {
      this.dat = dat;
    });
  }

  isAdmin(){
    if(this.admin){
      this.getAllData();
    } else if(!this.admin) {
      const user = this.AuthService.getUser()
      this.email = user.email;
      this.getDataByEmail(this.email)
      
    }
  }

  return(){
    this.router.navigateByUrl("/tabs/tab2");
  }

}
