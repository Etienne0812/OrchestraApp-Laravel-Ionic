import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  logged: boolean;
  constructor(private AuthService: AuthService, private router: Router, private storage:Storage) {}
  
  ionViewWillEnter() {
    this.storage.get('token').then (
      data => {
        if(data != null) {
          this.logged= true;
        } else {
          this.logged= false;
        }
      });
    console.log(this.logged);
  }

  isLogged(){
    if(this.logged){
      
      this.router.navigateByUrl("/employee-requests");
    } else if (!this.logged){
      this.router.navigateByUrl("/login");
    }
  }

  isLogged2(){
    if(this.logged){
      
      this.router.navigateByUrl("/employee-status");
    } else if (!this.logged){
      this.router.navigateByUrl("/login");
    }
  }
}
