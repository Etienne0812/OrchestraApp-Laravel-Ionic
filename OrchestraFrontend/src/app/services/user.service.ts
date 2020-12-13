import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })
};
const apiUrl = 'http://localhost:8000/api/auth';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUserId: number;

  constructor(private http: HttpClient) { }

  setCurrentUserId(id: number){
    this.currentUserId = id;
  }

  getCurrentUserId(): number {
    return this.currentUserId;
  }

  getRequestByEmail(email: string): Observable<User> {
    return this.http.get<User>(apiUrl + "/get/" + email);
  }

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(apiUrl + "/user");
  };

  // deleteData(id: number): Observable<any>{
  //   return this.http.delete(apiUrl + "/delete/" + id);
  // }

  addUser(usr: User): Observable<any>{
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("email", usr.email);
    bodyEncoded.append("password", usr.password);
    bodyEncoded.append("password_confirmation", usr.password_confirmation);
    let body = bodyEncoded.toString();

    return this.http.post(apiUrl + "/register", body, httpOptions);
  }


  // updateData(id: number, dat: Data): Observable<any>{
  //   let bodyEncoded = new URLSearchParams();
  //   bodyEncoded.append("DNI", dat.DNI);
  //   bodyEncoded.append("name", dat.name);
  //   bodyEncoded.append("firstSurname", dat.firstSurname);
  //   bodyEncoded.append("secondSurname", dat.secondSurname);
  //   bodyEncoded.append("phone", dat.phone);
  //   bodyEncoded.append("email", dat.email);
  //   bodyEncoded.append("employeeId", dat.employeeId.toString());
  //   let body = bodyEncoded.toString();
    
  //   return this.http.put(apiUrl + "/update/" + id, body, httpOptions);
  // }
}
