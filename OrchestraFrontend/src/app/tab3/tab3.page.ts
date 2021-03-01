import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { RequestsService } from '../services/requests.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })
};
const apiUrl = 'http://localhost:8000/api/requests/compilar';
const apiUrl2 = 'http://localhost:8000/api/requests/reporte';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private http: HttpClient, private RequestsService: RequestsService) {}

  requestReportCompile(){
    return this.http.get(apiUrl, httpOptions);
  }

  requestReportViewer(){
    // this.RequestsService.getReport();
    window.open('http://localhost:8000/api/requests/reporte');
  }
}