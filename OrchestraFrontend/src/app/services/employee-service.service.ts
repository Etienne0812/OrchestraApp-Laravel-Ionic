import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Employee } from '../models/employee';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })
};
const apiUrl = 'http://localhost:8000/api/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  currentEmployeeId: number;

  constructor(private http: HttpClient) { }

  setCurrentEmployeeId(id: number){
    this.currentEmployeeId = id;
  }

  getCurrentEmployeeId(): number {
    return this.currentEmployeeId;
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(apiUrl + "/get/" + id);
  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(apiUrl + "/get");
      // .pipe(
      //   tap(tv => console.log('fetched tvs'))
      //   // ,
      //   // catchError(this.handleError('getTVs', []))
      // );
  };

  // deleteTV(id: number): Observable<any>{
  //   return this.http.delete(apiUrl + "/" + id);
  // }

  // addTV(tv: TV): Observable<any>{
  //   let bodyEncoded = new URLSearchParams();
  //   bodyEncoded.append("model", tv.model);
  //   bodyEncoded.append("brand", tv.brand);
  //   bodyEncoded.append("price", tv.price);
  //   let body = bodyEncoded.toString();

  //   return this.http.post(apiUrl, body, httpOptions);
  // }

  // updateBicycle(id: number, tv: TV): Observable<any>{
  //   let bodyEncoded = new URLSearchParams();
  //   bodyEncoded.append("model", tv.model);
  //   bodyEncoded.append("brand", tv.brand);
  //   bodyEncoded.append("price", tv.price);
  //   let body = bodyEncoded.toString();
    
  //   return this.http.put(apiUrl + "/" + id, body, httpOptions);
  // }
}
