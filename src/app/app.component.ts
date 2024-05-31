import { Component } from '@angular/core';
import { AppAuthService } from './service/app.auth.service';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  
  public constructor(private authService: AppAuthService, public oauthService: OAuthService) {}

  public logout() {
    this.authService.logout();
  }
}