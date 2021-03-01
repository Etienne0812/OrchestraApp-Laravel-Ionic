import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from  'rxjs/operators';
import { AuthResponse } from './auth-response';
import { User } from '../../models/user';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';
import { UserService } from '../user.service';
import { stringify } from '@angular/compiler/src/util';
import { kStringMaxLength } from 'buffer';
const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })
};
const apiUrl = 'http://localhost:8000/api/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private role : string;
   admin: boolean;
  isLoggedIn = false;
   logged: boolean;
  private mail:string;
  authenticationState = new BehaviorSubject(null);
  userId = new BehaviorSubject(0);
  AUTH_SERVER_ADDRESS:  string  =  'http://localhost:8000';
  token:any;
  constructor(private http: HttpClient, private  httpClient:  HttpClient, private plt: Platform, private  storage:  Storage, private UserService:UserService) { 
    this.token=this.getTokken();
  }


  

  login(email: string, password: string){
    this.isAdmin(email);
    return this.http.post(apiUrl + '/login',
      {email:email, password:password}
    ).pipe(
      tap(token => {
        this.isLoggedIn = true;
        this.storage.set('token', token)
        .then(
          () => {
            console.log('Token Stored');
          },
          error => console.error('Error storing item', error)
        );

        this.token = token;
        console.log(token);
      //  console.log(this.getUser());
        return token;
        
      }),
    );
    

  }

  getTokken(){
    
    return this.storage.get('token');
    
   }

 
 
  isLogged(){
      this.storage.get('token').then(
      data => {
        this.token = data;
        if(this.token != null) {
          this.logged= true;
        } else {
          this.logged= false;
        }
      });
      
     return this.logged;
  }
  logout() {
    const headers = new HttpHeaders({
      'Authorization': this.token["token_type"]+" "+this.token["access_token"]
    });
    this.storage.remove("token");
    this.storage.remove("role");
    this.storage.remove("mail");
    this.logged=false;
    delete this.token;
    return this.http.get(apiUrl + '/logout', { headers: headers })
  }

  isAdmin(mail:string) {
    this.storage.set("mail",mail);
    this.UserService.getUserByEmail(mail).subscribe((user) => { 
      this.role = user[0].role;
      if(this.role=="2"){
        this.admin=true;
      }
      console.log(this.admin);
      console.log(user[0].role);
      this.storage.set("role",this.role);
    })}

  checkToken(){
    return this.storage.get('token').then( res => {
      if (res){
        return true;
      } else {
        return false;
      }
    });
  }

  addUser(usr: User): Observable<any>{
    const headers= new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': this.token["token_type"]+" "+this.token["access_token"]
      })
  
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("email", usr.email);
    bodyEncoded.append("password", usr.password);
    bodyEncoded.append("password_confirmation", usr.password_confirmation);
    bodyEncoded.append("role", usr.role.toString());
    let body = bodyEncoded.toString();
    return this.http.post(apiUrl + "/register", body,{headers:headers});
    
  }

  getUser(){
    return JSON.parse(sessionStorage.getItem(USER_KEY))
  }
}
