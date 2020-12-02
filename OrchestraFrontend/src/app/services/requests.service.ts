import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Requests } from '../models/requests';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })
};
const apiUrl = 'http://localhost:8000/api/requests';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  currentRequestId: number;

  constructor(private http: HttpClient) { }

  setCurrentRequestId(id: number){
    this.currentRequestId = id;
  }

  getCurrentRequestId(): number {
    return this.currentRequestId;
  }

  getRequestById(id: number): Observable<Requests> {
    return this.http.get<Requests>(apiUrl + "/get/" + id);
  }

  getRequests(): Observable<Requests[]> {
    return this.http.get<Requests[]>(apiUrl + "/get");
      // .pipe(
      //   tap(tv => console.log('fetched tvs'))
      //   // ,
      //   // catchError(this.handleError('getTVs', []))
      // );
  };

  deleteRequest(id: number): Observable<any>{
    return this.http.delete(apiUrl + "/delete/" + id);
  }

  addRequest(req: Requests): Observable<any>{
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("type", req.type);
    bodyEncoded.append("reason", req.reason);
    bodyEncoded.append("startDate", req.startDate);
    bodyEncoded.append("endDate", req.endDate);
    bodyEncoded.append("employeeId", req.employeeId);
    let body = bodyEncoded.toString();

    return this.http.post(apiUrl + "/post", body, httpOptions);
  }

  // updateBicycle(id: number, tv: TV): Observable<any>{
  //   let bodyEncoded = new URLSearchParams();
  //   bodyEncoded.append("model", tv.model);
  //   bodyEncoded.append("brand", tv.brand);
  //   bodyEncoded.append("price", tv.price);
  //   let body = bodyEncoded.toString();
    
  //   return this.http.put(apiUrl + "/" + id, body, httpOptions);
  // }
}
