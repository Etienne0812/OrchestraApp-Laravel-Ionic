import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  logged: boolean;
  constructor(private AuthService: AuthService, private router: Router) {}

  isLogged(){
    this.logged = this.AuthService.isLogged()
    if(this.logged){
      
      this.router.navigateByUrl("/employee-requests");
    } else if (!this.logged){
      this.router.navigateByUrl("/login");
    }
  }

  isLogged2(){
    this.logged = this.AuthService.isLogged()
    if(this.logged){
      
      this.router.navigateByUrl("/employee-status");
    } else if (!this.logged){
      this.router.navigateByUrl("/login");
    }
  }
}
