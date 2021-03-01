import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  private logged: boolean;
  private admin :boolean;
  constructor(private AuthService: AuthService, private router: Router, private storage:Storage) {}

  ionViewWillEnter() {
   
    this.logged=this.AuthService.isLogged();
    if(this.AuthService.isLogged()){
      this.storage.get("role").then((val) => {
        console.log(val);
        if(val=="2"){
         this.admin=true;
        }})                      

    }else{this.admin=false;}
    console.log(this.admin, this.logged);
  }
  

ngOnInit(){
 
}

  logout(){
    this.AuthService.logout();
    document.getElementById("logout-alert").style.display = "";
    console.log("logged out")
    this.logged=false;
  }

  showRegister(){
    if(!this.logged){
      document.getElementById("regist-button").style.display = "none";
    } 
    if(this.logged){
    //  this.admin = this.AuthService.isAdmin();
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
    if(this.AuthService.logged){
      this.router.navigateByUrl("/employee-data");
    } else if (!this.AuthService.logged){
      this.router.navigateByUrl("/login");
    }
  }

  confirmLogout(){
    window.location.reload()
    document.getElementById("logout-alert").style.display = "none";
  }
}
