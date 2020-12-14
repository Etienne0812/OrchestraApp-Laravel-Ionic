import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Data } from '../models/data';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })
};
const apiUrl = 'http://localhost:8000/api/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentDataId: number;

  constructor(private http: HttpClient) { }

  setCurrentDataId(id: number){
    this.currentDataId = id;
  }

  getCurrentDataId(): number {
    return this.currentDataId;
  }

  getDataById(id: number): Observable<Data> {
    return this.http.get<Data>(apiUrl + "/get/" + id);
  }

  getDataByEmail(email: string): Observable<Data[]> {
    return this.http.get<Data[]>(apiUrl + "/userData/" + email);
  }

  getData(): Observable<Data[]> {
    return this.http.get<Data[]>(apiUrl + "/get");
  };

  deleteData(id: number): Observable<any>{
    return this.http.delete(apiUrl + "/delete/" + id);
  }

  addData(dat: Data): Observable<any>{
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("DNI", dat.DNI);
    bodyEncoded.append("name", dat.name);
    bodyEncoded.append("firstSurname", dat.firstSurname);
    bodyEncoded.append("secondSurname", dat.secondSurname);
    bodyEncoded.append("phone", dat.phone);
    bodyEncoded.append("userEmail", dat.userEmail);
    let body = bodyEncoded.toString();

    return this.http.post(apiUrl + "/post", body, httpOptions);
  }

  updateData(id: number, dat: Data): Observable<any>{
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("DNI", dat.DNI);
    bodyEncoded.append("name", dat.name);
    bodyEncoded.append("firstSurname", dat.firstSurname);
    bodyEncoded.append("secondSurname", dat.secondSurname);
    bodyEncoded.append("phone", dat.phone);
    bodyEncoded.append("userEmail", dat.userEmail);
    let body = bodyEncoded.toString();
    
    return this.http.put(apiUrl + "/update/" + id, body, httpOptions);
  }
}
