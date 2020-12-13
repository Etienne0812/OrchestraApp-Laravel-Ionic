import { Component, OnInit } from '@angular/core';
import { Requests } from '../models/requests';
import { Status } from '../models/status';
import { Router } from '@angular/router';
import { RequestsService } from '../services/requests.service';
import { StatusService } from '../services/status.service';
import { AuthService } from '../services/auth/auth.service';




@Component({
  selector: 'app-employee-requests',
  templateUrl: './employee-requests.page.html',
  styleUrls: ['./employee-requests.page.scss'],
})
export class EmployeeRequestsPage implements OnInit {

  req: Requests[];
  sta: Status[];
  private role: string;

  constructor(private RequestsService: RequestsService, private AuthService: AuthService, private StatusService: StatusService, private router: Router) { }

  ngOnInit() {
    this.getAllRequests();
    this.getAllStatus();
    // this.isAdmin();
  }

  ionViewWillEnter(){
    this.getAllRequests();
  }

  getAllRequests(){
    this.RequestsService.getRequests().subscribe( req => {
      this.req = req;
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

  isAdmin(){
    document.getElementById("options-icon").style.display = "none";
    const user = this.AuthService.getUser()
      this.role = user.role;
      console.log(this.role)
      if(this.role == '1'){
      document.getElementById("update-icon").style.display = "";
      document.getElementById("delete-icon").style.display = "";
      } else if(this.role == '2') {
        document.getElementById("update-icon").style.display = "";
        document.getElementById("delete-icon").style.display = "";
        document.getElementById("confirm-icon").style.display = "";
        document.getElementById("reject-icon").style.display = "";
      }
  }

  confirmRequest(id: number){
    console.log("pero");
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
        console.log("a")
        for(var j=0;j<this.sta.length ; j++)
        {
          console.log("b")
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
      console.log("pero");
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
