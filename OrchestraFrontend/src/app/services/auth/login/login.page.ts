import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { YouAreLoggedInPageRoutingModule } from 'src/app/you-are-logged-in/you-are-logged-in-routing.module';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { User } from '../../../models/user';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  usr: User[]
  constructor(public fb: FormBuilder, 
    private authService: AuthService, 
    private alertController: AlertController, 
    private router: Router) { 
      this.loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.minLength(4)]],
        password: ['', [Validators.required, Validators.minLength(4)]]
      });
    }

  ngOnInit() {
  }

  

  onFormSubmit() {
    if (!this.loginForm.valid) {
      return false;
      
    } else {
      console.log("pep")
      let usr = {
        id: null,
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
        password_confirmation: null,
        role: 2, 
      };
      this.authService.login(usr)
      if(this.authService.isAuthenticated()){
        this.router.navigateByUrl("/tabs/tab1");
      }
      
    }
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      subHeader: message,
      message: 'Could not login. Try again.',
      buttons: ['OK']
    });

    await alert.present();

}

return(){
  this.router.navigateByUrl("/tabs/tab2");
}

}
