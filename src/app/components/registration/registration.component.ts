import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/UserModel';
import { AuthServiceService } from '../../services/authenticationService/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {

  userModel: UserModel = new UserModel('', '', '', '');

  constructor (private authService: AuthServiceService, private router: Router) {}

  onSubmit() {
    console.log(`inside submit method`)
    this.authService.register(this.userModel).subscribe(
      response => {
        this.router.navigate(['/login']);
      }
    );
  }

}
