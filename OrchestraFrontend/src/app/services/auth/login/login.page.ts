import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { YouAreLoggedInPageRoutingModule } from 'src/app/you-are-logged-in/you-are-logged-in-routing.module';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { User } from '../../../models/user';
import { AuthService } from '../auth.service';
import { UserService } from '../../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private role: number;

  loginForm: FormGroup;
  usr: User[]
  user: User[]
  constructor(public fb: FormBuilder, 
    private authService: AuthService, 
    private UserService: UserService, 
    private alertController: AlertController, 
    private router: Router) { 
      
    }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(4)]]
    });
  }

  

  onFormSubmit() {
    

    if (!this.loginForm.valid) {
      return false;
    } else {
      let mail = this.loginForm.value.email
      this.UserService.getUserByEmail(mail).subscribe((user) => { 
        
        this.role = user[0].role;
        console.log(this.role)
        let usr = {
          id: null,
          email: this.loginForm.value.email,
          password: this.loginForm.value.password,
          password_confirmation: null,
          role: this.role, 
        };
        this.authService.login(usr)
        if(this.authService.isAuthenticated()){
          this.router.navigateByUrl('/tabs/tab1');
        } 
      })
      console.log("pep")
      
      
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
