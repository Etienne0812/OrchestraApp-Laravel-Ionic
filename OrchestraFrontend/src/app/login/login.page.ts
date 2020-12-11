import { ReturnStatement } from '@angular/compiler';
import { PipeCollector } from '@angular/compiler/src/template_parser/binding_parser';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { User } from '../services/user';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  //usr: User[]
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
      let user: User = {
        id: null,
        email: this.loginForm.value.email,
        password: this.loginForm.value.password, 
        role: null, 
      };
      this.authService.login(user).subscribe((res)=>{
        if(!res.access_token) {
          this.presentAlert("invalid credentials");
          return;
        }
        this.router.navigateByUrl('/you-are-logged-in');
        this.loginForm.reset();
      }, err => {
        this.presentAlert("Error");
      });
      
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
