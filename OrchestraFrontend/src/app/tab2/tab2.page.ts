import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { File } from '@ionic-native/file/ngx';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page  {
  private logged: boolean;
  private admin :boolean;
  
  constructor(private AuthService: AuthService, private router: Router, private document: DocumentViewer, private file: File) {}
  

  ionViewWillEnter() {
    this.logged = this.AuthService.isLogged();
    if(this.logged){
      this.admin = this.AuthService.isAdmin();
    }
    
    
  }

  ola(){
    const options: DocumentViewerOptions = {
      title: 'My PDF'
    }
    
    this.document.viewDocument('../../../../OrchestraBackend/public/solicitudesorquesta.pdf', 'application/pdf', options)
  }

  logout(){
    this.AuthService.deleteUser();
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
  

  // checkLogin(){
  //   if(this.logged){
  //     document.getElementById("data-btn").style.visibility = "visible";
  //     document.getElementById("logout-btn").style.visibility = "visible";
  //     document.getElementById("login-btn").style.visibility = "hidden";
  //   } else {
  //     document.getElementById("login-btn").style.visibility = "visible";
  //     document.getElementById("data-btn").style.visibility = "hidden";
  //     document.getElementById("logout-btn").style.visibility = "hidden";
  //   }
  // }

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
