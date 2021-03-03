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
  private admin: boolean;
  private logged: boolean;
  authenticationState = new BehaviorSubject(null);
  userId = new BehaviorSubject(0);
  AUTH_SERVER_ADDRESS:  string  =  'http://localhost:8000';

  constructor(private http: HttpClient, private  httpClient:  HttpClient, private plt: Platform, private  storage:  Storage , private UserService:UserService) { 
    this.token=this.getTokken();
  }


/*   private getOptions(user: User){
    let base64UserAndPassword = window.btoa(user.email + ":" + user.password);

    let basicAccess = 'Basic ' + base64UserAndPassword;

    let options = {
      headers: {
        'Authorization' : basicAccess,
        'Content-Type' : 'application/x-www-form-urlencoded',
      }
      //, withCredentials: true
    };

    return options;
  } */

 /*  login(user){
    // this.httpClient.post(`http://localhost:8000/api/auth/login`, user).subscribe( res => {

    //     this.authenticationState.next(true);
    //     this.userId.next(user.id);
    //     console.log(this.authenticationState.value)
    //     this.saveUser(user)   
    // });
    this.userId.next(user.id);
    this.saveUser(user) 

  } */
  token:any;
  login(email: string, password: string){
    this.UserService.getUserByEmail(email).subscribe((user) => { 
      this.role = user[0].role;
      if(this.role=="2"){
        this.admin=true;
      }
    });
    return this.http.post(apiUrl + '/login',
      {email:email, password:password}
    ).pipe(
      tap(token => {
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
  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  isAdmin(){
      if(this.role == '1'){
      this.admin = false;
      } else if(this.role == '2') {
        this.admin = true;
      } 
      return this.admin;
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

  

  logout(){
    const headers = new HttpHeaders({
      'Authorization': this.token["token_type"]+" "+this.token["access_token"]
    });
    this.storage.remove("token");
    this.logged=false;
    delete this.token;
    return this.http.get(apiUrl + '/logout', { headers: headers })
  }

   isAuthenticated(){
    if(this.checkToken != null){
      this.authenticationState.next(true);
    } else if (this.checkToken == null) {
      this.authenticationState.next(false)
    }
    return this.authenticationState.value;
  }


  checkToken(){
    return this.storage.get(TOKEN_KEY).then( res => {
      if (res){
        this.authenticationState.next(true);
      } else {
        this.authenticationState.next(false);
      }
    });
  }

  saveUser(user: User){
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  deleteUser(){
    window.sessionStorage.removeItem(USER_KEY);
  }

  addUser(usr: User): Observable<any>{
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("email", usr.email);
    bodyEncoded.append("password", usr.password);
    bodyEncoded.append("password_confirmation", usr.password_confirmation);
    bodyEncoded.append("role", usr.role.toString());
    let body = bodyEncoded.toString();
    return this.http.post(apiUrl + "/register", body, httpOptions);
    
  }

  getUser(){
    return JSON.parse(sessionStorage.getItem(USER_KEY))
  }
}
