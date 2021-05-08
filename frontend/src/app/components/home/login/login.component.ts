import { Component, OnInit } from '@angular/core';
// Import necessary modules
import { User } from '../../../models/user';
import { UserService } from 'src/app/services/user.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // Create user variable
  public user;
  // Token variable
  public token: any;
  // Identity variable (user data)
  public identity: any;
  // Errors variable
  public errors: any;

  constructor(private userService: UserService, private router: Router) {
    this.user = new User('', '', '', '', 0, '', false);
  }

  ngOnInit(): void {}
  // Login Method
  login(loginForm: any) {
    // Validate if form is valid
    if (!loginForm.valid) {
      // Validate if fields are missing
      console.log('You are Missing Fields!');
      this.errors = 'You are missing required fields!';
      this.endError();
    } else {
      // Execute login
      this.userService.login(this.user, true).subscribe(
        (response) => {
          // Save token
          this.token = response.jwt;
          localStorage.setItem('token', this.token);
          // Save user data on browser
          localStorage.setItem('identity', JSON.stringify(response.user));
          // Redirect to dashboard once succesfull
          this.router.navigate(['app-dashboard']);
        },
        (error) => {
          this.errors = error.error.message;
          this.endError();
        }
      );
    }
  }
  // Close error window
  endError() {
    setTimeout(() => {
      this.errors = '';
    }, 5000);
  }
}
