import { Component, OnInit } from '@angular/core';
import { Requests } from '../models/requests';
import { Router } from '@angular/router';
import { RequestsService } from '../services/requests.service';

@Component({
  selector: 'app-employee-requests',
  templateUrl: './employee-requests.page.html',
  styleUrls: ['./employee-requests.page.scss'],
})
export class EmployeeRequestsPage implements OnInit {

  req: Requests[];

  constructor(private RequestsService: RequestsService, private router: Router) { }

  ngOnInit() {
    this.getAllRequests();
  }

  ionViewWillEnter(){
    this.getAllRequests();
  }

  getAllRequests(){
    this.RequestsService.getRequests().subscribe( req => {
      this.req = req;
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
