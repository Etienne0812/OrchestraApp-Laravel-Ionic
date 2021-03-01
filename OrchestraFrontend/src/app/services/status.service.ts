import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Status } from '../models/status';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { AuthService } from '../services/auth/auth.service';

const apiUrl = 'http://localhost:8000/api/status';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  currentStatusId: number;

  constructor(private http: HttpClient,private storage:Storage, private AuthService: AuthService) { }
  token=this.AuthService.token;
  setCurrentStatusId(id: number){
    this.currentStatusId = id;
  }

  getCurrentStatusId(): number {
    return this.currentStatusId;
  }

  getStatusById(id: number): Observable<Status> {
    const  headers= new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': this.token["token_type"]+" "+this.token["access_token"]
    });
    return this.http.get<Status>(apiUrl + "/get/" + id);
  }

  getStatus(): Observable<Status[]> {
    const  headers= new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': this.token["token_type"]+" "+this.token["access_token"]
    });
    return this.http.get<Status[]>(apiUrl + "/get",{headers:headers});
  };

  getStatusByEmail(email: string): Observable<Status[]> {
    const  headers= new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': this.token["token_type"]+" "+this.token["access_token"]
    });
    return this.http.get<Status[]>(apiUrl + "/userData/" + email,{headers:headers});
  }

  deleteStatus(id: number): Observable<any>{
    const  headers= new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': this.token["token_type"]+" "+this.token["access_token"]
    });
    return this.http.delete(apiUrl + "/delete/" + id,{headers:headers});
  }

  addStatus(sta: Status): Observable<any>{
    const  headers= new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': this.token["token_type"]+" "+this.token["access_token"]
    });
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("type", sta.type);
    bodyEncoded.append("startDate", sta.startDate);
    bodyEncoded.append("endDate", sta.endDate);
    bodyEncoded.append("userEmail", sta.userEmail);
    let body = bodyEncoded.toString();

    return this.http.post(apiUrl + "/post", body, {headers:headers});
  }

  updateStatus(id: number, sta: Status): Observable<any>{
    const  headers= new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': this.token["token_type"]+" "+this.token["access_token"]
    });
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("type", sta.type);
    bodyEncoded.append("startDate", sta.startDate);
    bodyEncoded.append("endDate", sta.endDate);
    let body = bodyEncoded.toString();
    
    return this.http.put(apiUrl + "/put/" + id, body, {headers:headers});
  }

  modifyStatus(id: number, sta: Status): Observable<any>{
    const  headers= new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': this.token["token_type"]+" "+this.token["access_token"]
    });
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("type", sta.type);
    bodyEncoded.append("startDate", sta.startDate);
    bodyEncoded.append("endDate", sta.endDate);
    let body = bodyEncoded.toString();
    
    return this.http.put(apiUrl + "/put/" + id, body, {headers:headers});
  }
}
