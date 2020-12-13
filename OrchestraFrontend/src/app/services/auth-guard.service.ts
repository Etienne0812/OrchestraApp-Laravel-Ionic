import { Injectable } from '@angular/core';
import { AuthService } from './auth/auth.service'
import { CanActivate } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private authService: AuthService) { }

  canActivate(): boolean {
    return this.authService.isAuthenticated();
  }
}
