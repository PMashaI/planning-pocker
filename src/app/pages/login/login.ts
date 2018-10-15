import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login-page',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  title = 'Please login first';
  userName = '';

  loginForm = {
    title: 'Enter you nick name'
  };

  constructor(
    private router: Router
  ) {}
}
