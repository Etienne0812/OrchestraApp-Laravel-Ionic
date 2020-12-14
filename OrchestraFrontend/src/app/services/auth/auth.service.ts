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

  constructor(private http: HttpClient, private  httpClient:  HttpClient, private plt: Platform, private  storage:  Storage) { 
    this.plt.ready().then ( () => {
        this.checkToken();
    });
  }


  private getOptions(user: User){
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
  }


  // register(usr: User): Observable<AuthResponse> {
  //   return this.httpClient.post<AuthResponse>(`${this.AUTH_SERVER_ADDRESS}/api/auth/register/`, usr, this.getOptions(usr)).pipe(
  //     tap(async (res:  AuthResponse ) => {

  //       if (res.user) {
  //         await this.storage.set("token", res.access_token);
  //       }
  //     })

  //   );
  // }

  // login(usr: User): Observable<AuthResponse> {
  //   return this.httpClient.post(`${this.AUTH_SERVER_ADDRESS}/api/auth/login`, null, this.getOptions(usr)).pipe(
  //     tap(async (res: AuthResponse) => {

  //       if (res.user) {
  //         await this.storage.set("token", res.access_token);
  //       }
  //     })
  //   );
  // }

  login(user){
    this.httpClient.post(`http://localhost:8000/api/auth/login`, user).subscribe( res => {

        this.authenticationState.next(true);
        this.userId.next(user.id);
        console.log(this.authenticationState.value)
        this.saveUser(user)   
    });
  

  }

  

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  isAdmin(){
    const user = this.getUser()
      this.role = user.role;
      if(this.role == '1'){
      this.admin = false;
      } else if(this.role == '2') {
        this.admin = true;
      } 
      return this.admin;
  }

  isLogged(){
    const user = this.getUser()
    if(user == null){
      this.logged = false;
    } else {
      this.logged = true;
    }
    return this.logged;
  }

  

  logout(){
    return this.storage.remove(TOKEN_KEY).then ( () => {
      this.authenticationState.next(false);
    });
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
    console.log(this.storage.get(TOKEN_KEY))
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
    let body = bodyEncoded.toString();
    return this.http.post(apiUrl + "/register", body, httpOptions);
    
  }

  getUser(){
    return JSON.parse(sessionStorage.getItem(USER_KEY))
  }

  

  



  // async logout() {
  //   await this.storage.remove(TOKEN_KEY);
  // }

  // async isAuthenticated() {
  //   let token = await this.storage.get(TOKEN_KEY);
  //   if (token){ //Just check if exists. This should be checked with current date
  //     return true;
  //   }
  //   return false;
  // }
}
