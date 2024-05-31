import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AppAuthService } from '../../service/app.auth.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css'
})
export class LoginpageComponent implements OnInit {

  useralias = '';
  username = '';

  constructor(private authService: AppAuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.usernameObservable.subscribe(name => {
      this.username = name;
    });
    this.authService.useraliasObservable.subscribe(alias => {
      this.useralias = alias;
      if (alias) {
        this.router.navigate(['/main']);
      }
    });
  }
}