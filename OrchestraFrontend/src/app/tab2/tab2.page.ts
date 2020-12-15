import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  private logged: boolean;
  constructor(private AuthService: AuthService, private router: Router) {}

  ngOnInit() {
    this.isLogged()
  }

  logout(){
    this.AuthService.deleteUser();
    console.log("logged out")
  }

  isLogged(){
    this.logged = this.AuthService.isLogged()
    if(this.logged){
      this.router.navigateByUrl("/employee-data");
    } else if (!this.logged){
      this.router.navigateByUrl("/login");
    }
    // href="/employee-requests"
  }
}
