import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { YouAreLoggedInPageRoutingModule } from 'src/app/you-are-logged-in/you-are-logged-in-routing.module';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { User } from '../../../models/user';
import { AuthService } from '../auth.service';
import { UserService } from '../../user.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private role: number;

  loginForm: FormGroup;
  us:Observable<User>
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

  login() {
    
    this.authService.isAdmin(this.loginForm.value.email);
    this.authService.login (this.loginForm.value.email, this.loginForm.value.password).subscribe(
      
      data => {
        console.log("Logged In");
      },
      error => {
        console.log(error);
      },
      () => {
        
        if(this.authService.checkToken()){
          this.router.navigateByUrl('/tabs/tab1');
        } 
      }
    );
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
