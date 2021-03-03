import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page  {
  private logged: boolean;
  private admin :boolean;
  
  constructor(private AuthService: AuthService, private router: Router) {}
  

  ionViewWillEnter() {
    this.logged = this.AuthService.isLogged();
    if(this.logged){
      this.admin = this.AuthService.isAdmin();
    }
    
    
  }

  logout(){
    this.AuthService.deleteUser();
    this.AuthService.logout();
    this.AuthService.token=null;
    document.getElementById("logout-alert").style.display = "";
    console.log("logged out")
  }

  showRegister(){
    if(!this.logged){
      document.getElementById("regist-button").style.display = "none";
    } 
    if(this.logged){
      this.admin = this.AuthService.isAdmin();
        if(!this.admin){
          document.getElementById("regist-button").style.display = "none";
        }
    }
    
  }

  loginPage(){
    this.router.navigateByUrl("/login");
  }

  dataPage(){
    this.router.navigateByUrl("/employee-data");
  }

  registPage(){
    this.router.navigateByUrl("/register");
  }
  

  isLogged(){
    this.logged = this.AuthService.isLogged()
    if(this.logged){
      this.router.navigateByUrl("/employee-data");
    } else if (!this.logged){
      this.router.navigateByUrl("/login");
    }
  }

 
  confirmLogout(){
    document.getElementById("logout-alert").style.display = "none";
    window.location.reload();
  }
}
