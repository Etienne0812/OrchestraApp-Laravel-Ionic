import { Component, OnInit } from '@angular/core';
import { Status } from '../models/status';
import { Router } from '@angular/router';
import { StatusService } from '../services/status.service';
import { AuthService } from '../services/auth/auth.service';
import { elementAt } from 'rxjs/operators';

@Component({
  selector: 'app-employee-status',
  templateUrl: './employee-status.page.html',
  styleUrls: ['./employee-status.page.scss'],
})
export class EmployeeStatusPage implements OnInit {

  sta: Status[];
  admin :boolean;
  private email: string;
  status: boolean;
  search: string;

  constructor(private StatusService: StatusService, private AuthService: AuthService, private router: Router) { }

  ngOnInit() {
    this.isAdmin();
    this.admin = this.AuthService.isAdmin();
  }

  ionViewWillEnter(){
    this.getAllStatuses();
  }

  getAllStatuses(){
    this.StatusService.getStatus().subscribe( sta => {
      this.sta = sta;
      if(this.sta.length == 0){
        console.log("agua")
        this.status = false
      } else {
        this.status = true
      }
    });
    document.getElementById("reload-icon").style.display = "none";
    document.getElementById("search-icon").style.display = "";
    this.search = "";
  }

  deleteStatus(id: number){
    this.StatusService.deleteStatus(id).subscribe( () => {
      this.getAllStatuses();
    }) 
  }


  getStatusByEmail(email: string){
    this.StatusService.getStatusByEmail(email).subscribe( sta => {
      this.sta = sta;
      if(this.sta.length == 0){
        console.log("agua")
        this.status = false
      } else {
        this.status = true
        console.log(this.search)
      }
    });
    document.getElementById("reload-icon").style.display = "";
    document.getElementById("search-icon").style.display = "none";
  }

  insertStatus(){
    this.router.navigateByUrl("/create-status");
  }

  StatusSearch(){
    if(this.search == ""){
      this.status = false;
    } else {
      this.getStatusByEmail(this.search)
    }
    
  }

  updateStatus(id: number){
    this.StatusService.setCurrentStatusId(id);
    this.router.navigateByUrl("/update-status");
  }

  isAdmin(){
    
    if(this.admin){
      this.admin = true;
    } 
  }

  return(){
    this.router.navigateByUrl("/tabs/tab1");
  }

}
