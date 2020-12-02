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

  req: Requests[]

  constructor(private RequestsService: RequestsService, private router: Router) { }

  ngOnInit() {
    this.getAllRequests();
  }

  getAllRequests(){
    this.RequestsService.getRequests().subscribe( req => {
      this.req = req;
      console.log(req);
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

}
