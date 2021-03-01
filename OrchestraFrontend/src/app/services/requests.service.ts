import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Requests } from '../models/requests';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import {Storage} from "@ionic/storage";
import { AuthService } from './auth/auth.service';

 
const apiUrl = 'http://localhost:8000/api/requests';

@Injectable({
  providedIn: 'root'
})

 
export class RequestsService {
 
  currentRequestId: number;

  constructor(private http: HttpClient,private storage:Storage, private authService:AuthService) { }
  
  token=this.authService.token;
  
 
  setCurrentRequestId(id: number){
    this.currentRequestId = id;
  }

  getCurrentRequestId(): number {
    return this.currentRequestId;
  }

  getRequestById(id: number): Observable<Requests> {
    const  headers= new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded', 
      'Authorization': this.token["token_type"]+" "+this.token["access_token"]
    });
    console.log(this.token["token_type"]+" "+this.token["access_token"]);
    return this.http.get<Requests>(apiUrl + "/get/" + id,{headers:headers});
  }

  getRequestByEmail(email: string): Observable<Requests[]> {
    const  headers= new HttpHeaders({
      'Authorization': this.token["token_type"]+" "+this.token["access_token"]
    });
    console.log(this.token["token_type"]+" "+this.token["access_token"]);
    return this.http.get<Requests[]>(apiUrl + "/userData/" + email,{headers:headers});
  }

  getRequests(): Observable<Requests[]> {
    const  headers= new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': this.token["token_type"]+" "+this.token["access_token"]
  });
    return this.http.get<Requests[]>(apiUrl + "/get",{headers:headers});
    
  };

  deleteRequest(id: number){
    const  headers= new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': this.token["token_type"]+" "+this.token["access_token"]
    });
    return this.http.delete(apiUrl + "/delete/" + id,{headers:headers});
  }

  addRequest(req: Requests): Observable<any>{
    const  headers= new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': this.token["token_type"]+" "+this.token["access_token"]
    });
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("type", req.type);
    bodyEncoded.append("reason", req.reason);
    bodyEncoded.append("startDate", req.startDate);
    bodyEncoded.append("endDate", req.endDate);
    bodyEncoded.append("userEmail", req.userEmail);
    let body = bodyEncoded.toString();

    return this.http.post(apiUrl + "/post", body, {headers:headers});
  }

  updateRequest(id: number, req: Requests): Observable<any>{
    const  headers= new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': this.token["token_type"]+" "+this.token["access_token"]
    });
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("type", req.type);
    bodyEncoded.append("reason", req.reason);
    bodyEncoded.append("startDate", req.startDate);
    bodyEncoded.append("endDate", req.endDate);
    bodyEncoded.append("userEmail", req.userEmail);
    let body = bodyEncoded.toString();
    
    return this.http.put(apiUrl + "/put/" + id, body, {headers:headers});
  }

  reviseRequest(id: number, req: Requests): Observable<any>{
    const  headers= new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': this.token["token_type"]+" "+this.token["access_token"]
    });
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("revised", req.revised);
    let body = bodyEncoded.toString();
    
    return this.http.put(apiUrl + "/put/" + id, body,{headers:headers});
  }

  
}
