import { Component, OnInit } from '@angular/core';
import { Data } from '../models/data';
import { Status } from '../models/status';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { StatusService } from '../services/status.service';
import { AuthService } from '../services/auth/auth.service';
import {Storage} from '@ionic/storage';
@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.page.html',
  styleUrls: ['./employee-data.page.scss'],
})
export class EmployeeDataPage   implements OnInit{

  dat: Data[]
  sta: Status[]
   email: string;
  admin :boolean;
  data: boolean;
  search: string;
 logged:boolean;
 rolee:number;
  constructor(private DataService: DataService, private StatusService: StatusService, private AuthService: AuthService, private router: Router, private storage:Storage) {
    /* this.storage.get("mail").then((val) => {
      console.log(val);
      this.email=val;
      console.log(this.email);
    });

   
       */          
      this.storage.get("role").then((val) => {
        console.log(val);
        if(val==2){
          this.rolee=val;
         this.admin=true;
        }else{
          this.rolee=val;
          this.admin=false;
        }
      });
    }
    ngOnInit() {
    
     
    
    }

  ionViewWillEnter() {    
    this.storage.get("role").then((role)=>{
      console.log(role);
this.rolee=role;
if(this.rolee==2){
  this.admin = true;
}else{
  this.admin=false;
}
    });
               
  
    console.log(this.admin);        
    if(this.rolee==2){
      console.log(this.admin);
      this.getAllData();
    } else {
      this.storage.get("mail").then((val) => {
        console.log(val);
        this.email=val;
        this.getStatusByEmail(this.email);
        this.getDataByEmail(this.email);
           
        console.log(this.email);
      });
      
      
    }

    }
    

  
    
  

  getAllData(){
    console.log(this.email);
    this.DataService.getData().subscribe( dat => {
      this.dat = dat;
      if(this.dat.length == 0){
        console.log("agua")
        this.data = false
      } else {
        this.data = true
      }
    });
    document.getElementById("reload-icon").style.display = "none";
    document.getElementById("search-icon").style.display = "";
    this.search = "";
  }

  getDataByEmail(email: string){
    this.DataService.getDataByEmail(email).subscribe( dat => {
      this.dat = dat;
      if(this.dat.length == 0){
        console.log("agua")
        this.data = false
      } else {
        this.data = true
      }
    });
    if(this.admin){
      document.getElementById("reload-icon").style.display = "";
      document.getElementById("search-icon").style.display = "none";
    }
  }

  getStatusByEmail(email: string){
    this.StatusService.getStatusByEmail(email).subscribe( sta => {
      this.sta = sta;
      console.log(sta);
      console.log(email);
    });
  }

  DataSearch(){
    this.getDataByEmail(this.search)
  }

  updateData(id: number){
    this.DataService.setCurrentDataId(id);
    this.router.navigateByUrl("/update-data");
  }

  isAdmin(){
    if(this.admin){
      this.getAllData();
    } else if(!this.admin) {

      this.getDataByEmail(this.email);
      this.getStatusByEmail(this.email);
      
    }
  }

  return(){
    this.router.navigateByUrl("/tabs/tab2");
  }

}
