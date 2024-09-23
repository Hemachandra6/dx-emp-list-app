import { Component } from '@angular/core';
import { LoginRequest } from '../../models/login-request';
import { AuthServiceService } from '../../services/authenticationService/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginRequest: LoginRequest = new LoginRequest('', '');

  constructor (private authService: AuthServiceService, private router: Router) {}

  login() {
    this.authService.login(this.loginRequest).subscribe(
      response => {
        if (response && response.token) {
          console.log(`Login successful, token: ${response.token}`)
          localStorage.setItem('token', response.token);
          this.router.navigate(['/employees']);
        } else {
          console.error('Login failed: Invalid response');
        }
      },
      error => {
        console.error('Login failed: ', error);
        // Handle login error (e.g., show a message to the user)
      }
    );
  }

}
