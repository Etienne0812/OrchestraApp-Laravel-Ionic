import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Status } from '../models/status';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })
};
const apiUrl = 'http://localhost:8000/api/status';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  currentStatusId: number;

  constructor(private http: HttpClient) { }

  setCurrentStatusId(id: number){
    this.currentStatusId = id;
  }

  getCurrentStatusId(): number {
    return this.currentStatusId;
  }

  getStatusById(id: number): Observable<Status> {
    return this.http.get<Status>(apiUrl + "/get/" + id);
  }

  getStatus(): Observable<Status[]> {
    return this.http.get<Status[]>(apiUrl + "/get");
  };

  getStatusByEmail(email: string): Observable<Status[]> {
    return this.http.get<Status[]>(apiUrl + "/userData/" + email);
  }

  deleteStatus(id: number): Observable<any>{
    return this.http.delete(apiUrl + "/delete/" + id);
  }

  addStatus(sta: Status): Observable<any>{
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("type", sta.type);
    bodyEncoded.append("startDate", sta.startDate);
    bodyEncoded.append("endDate", sta.endDate);
    bodyEncoded.append("userEmail", sta.userEmail);
    let body = bodyEncoded.toString();

    return this.http.post(apiUrl + "/post", body, httpOptions);
  }

  updateStatus(id: number, sta: Status): Observable<any>{
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("type", sta.type);
    bodyEncoded.append("startDate", sta.startDate);
    bodyEncoded.append("endDate", sta.endDate);
    let body = bodyEncoded.toString();
    
    return this.http.put(apiUrl + "/put/" + id, body, httpOptions);
  }

  modifyStatus(id: number, sta: Status): Observable<any>{
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("type", sta.type);
    bodyEncoded.append("startDate", sta.startDate);
    bodyEncoded.append("endDate", sta.endDate);
    let body = bodyEncoded.toString();
    
    return this.http.put(apiUrl + "/put/" + id, body, httpOptions);
  }
}
