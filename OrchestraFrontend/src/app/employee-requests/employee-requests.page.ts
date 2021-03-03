import { Component, OnInit } from '@angular/core';
import { Requests } from '../models/requests';
import { Status } from '../models/status';
import { Router } from '@angular/router';
import { RequestsService } from '../services/requests.service';
import { StatusService } from '../services/status.service';
import { AuthService } from '../services/auth/auth.service';
import { typeWithParameters } from '@angular/compiler/src/render3/util';




@Component({
  selector: 'app-employee-requests',
  templateUrl: './employee-requests.page.html',
  styleUrls: ['./employee-requests.page.scss'],
})
export class EmployeeRequestsPage implements OnInit {

  req: Requests[];
  sta: Status[];
   
  admin :boolean;
  request: boolean;


  constructor(private RequestsService: RequestsService, private AuthService: AuthService, private StatusService: StatusService, private router: Router) { }
  email=  this.AuthService.email;
  ngOnInit() {
    this.getAllStatus();
    this.admin = this.AuthService.admin;
    this.isAdmin()
  }

  ionViewWillEnter(){
    this.isAdmin();
  }

  requestReportViewer(){
    // this.RequestsService.getReport();
    window.open('http://localhost:8000/api/requests/reporte');
  }

  isAdmin(){
    
    if(this.AuthService.isAdmin()){
      this.getAllRequests();
    } else if(!this.AuthService.isAdmin()) {
      this.getRequestsByEmail(this.email)
    }
  }

 

  getAllRequests(){
    this.RequestsService.getRequests().subscribe( req => {
      this.req = req;
    });
  }

  getRequestsByEmail(email: string){
    this.RequestsService.getRequestByEmail(email).subscribe( req => {
      this.req = req;
      if(this.req.length == 0){
        console.log("agua")
        this.request = false
      } else {
        this.request = true
      }
    });
  }

  getAllStatus(){
    this.StatusService.getStatus().subscribe( sta => {
      this.sta = sta;
    });
  }

  insertRequest(){
    this.router.navigateByUrl("/create-request");
  }

  deleteRequest(id: number){
    this.RequestsService.deleteRequest(id).subscribe( () => {
      this.getAllRequests();
    }) 
  
  }

  updateRequest(id: number){
    this.RequestsService.setCurrentRequestId(id);
    this.router.navigateByUrl("/update-request");
  }

  confirmRequest(id: number){
      let req = {
        id: null,
        type: null,
        reason: null, 
        startDate: null, 
        endDate: null, 
        userEmail: null, 
        revised: 'Solicitud aceptada', 
      }
      this.RequestsService.reviseRequest(id, req)
        .subscribe((res) => {
          this.router.navigateByUrl("/employee-requests");
        });
      
      this.modifyStatus(id);
    }

    modifyStatus(id: number){
      for(var i=0;i<this.req.length ; i++)
      {
        for(var j=0;j<this.sta.length ; j++)
        {
        if(this.req[i].userEmail.match(this.sta[j].userEmail) && this.req[i].id == id){
          console.log(this.req[i].type)
          let sta = {
          id: null,
          type: this.req[i].type, 
          startDate: this.req[i].startDate, 
          endDate: this.req[i].endDate, 
          userEmail: null, 
         }
        this.StatusService.modifyStatus(this.sta[j].id, sta)
        .subscribe((res) => {
          this.router.navigateByUrl("/employee-requests");
        });
        }
       }
      }
      
    }

    rejectRequest(id: number){
        let req = {
          id: null,
          type: null,
          reason: null, 
          startDate: null, 
          endDate: null, 
          userEmail: null, 
          revised: 'Solicitud denegada', 
        }
        this.RequestsService.reviseRequest(id, req)
          .subscribe((res) => {
            this.router.navigateByUrl("/employee-requests");
          });
      }

      return(){
        this.router.navigateByUrl("/tabs/tab1");
      }
  

}
