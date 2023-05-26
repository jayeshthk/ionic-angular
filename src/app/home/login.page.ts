import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  email: string;
  password: string;

  constructor(private router: Router) {}

  login() {
    // Perform login logic here
    // Example: Validate credentials and navigate to the home page on success

    if (this.email === 'user@example.com' && this.password === 'password') {
      this.router.navigate(['/home']);
    } else {
      console.log('Invalid credentials');
      // Display error message or show a toast notification
    }
  }
}
