import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Data } from '../models/data';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { UserService } from './user.service';
import { AuthService } from './auth/auth.service';

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

  constructor(private http: HttpClient,private AuthService:AuthService) { }
token=this.AuthService.token;
  setCurrentDataId(id: number){
    this.currentDataId = id;
  }

  getCurrentDataId(): number {
    return this.currentDataId;
  }

  getDataById(id: number): Observable<Data> {
    const headers= new HttpHeaders({   
    'Authorization': this.token["token_type"]+" "+this.token["access_token"]
  })
    return this.http.get<Data>(apiUrl + "/get/" + id, {headers:headers});
  }

  getDataByEmail(email: string): Observable<Data[]> {
    const headers= new HttpHeaders({      'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': this.token["token_type"]+" "+this.token["access_token"]
  })
    return this.http.get<Data[]>(apiUrl + "/userData/" + email, {headers:headers});
  }

  getData(): Observable<Data[]> {
    const headers= new HttpHeaders({     
    'Authorization': this.token["token_type"]+" "+this.token["access_token"]
  })
    return this.http.get<Data[]>(apiUrl + "/get", {headers:headers});
  };

  deleteData(id: number): Observable<any>{
    const headers= new HttpHeaders({      'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': this.token["token_type"]+" "+this.token["access_token"]
  })
    return this.http.delete(apiUrl + "/delete/" + id, {headers:headers});
  }

  addData(dat: Data): Observable<any>{
    const headers= new HttpHeaders({      'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': this.token["token_type"]+" "+this.token["access_token"]
  })
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("DNI", dat.DNI);
    bodyEncoded.append("name", dat.name);
    bodyEncoded.append("firstSurname", dat.firstSurname);
    bodyEncoded.append("secondSurname", dat.secondSurname);
    bodyEncoded.append("phone", dat.phone);
    bodyEncoded.append("userEmail", dat.userEmail);
    let body = bodyEncoded.toString();

    return this.http.post(apiUrl + "/post", body,  {headers:headers});
  }

  updateData(id: number, dat: Data): Observable<any>{
    const headers= new HttpHeaders({      'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': this.token["token_type"]+" "+this.token["access_token"]
  })
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("DNI", dat.DNI);
    bodyEncoded.append("name", dat.name);
    bodyEncoded.append("firstSurname", dat.firstSurname);
    bodyEncoded.append("secondSurname", dat.secondSurname);
    bodyEncoded.append("phone", dat.phone);
    bodyEncoded.append("userEmail", dat.userEmail);
    let body = bodyEncoded.toString();
    
    return this.http.put(apiUrl + "/put/" + id, body,  {headers:headers});
  }
}
