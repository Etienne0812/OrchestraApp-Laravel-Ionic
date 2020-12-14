import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  constructor(private AuthService: AuthService) {}

  ngOnInit() {
    this.isLogged()
  }

  logout(){
    this.AuthService.deleteUser();
    console.log("logged out")
  }

  isLogged(){
    if(this.AuthService.isAuthenticated){
      
    } else {
      document.getElementById("logout-btn").style.display = "none";
    }
  }
}
