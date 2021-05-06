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

  constructor(private userService: UserService) {
    this.user = new User('', '', '', '', 0, '', false);
  }

  ngOnInit(): void {}
  // Login Method
  login(loginForm: any) {
    // Validate if form is valid
    if (!loginForm.valid) {
      // Validate if fields are missing
      console.log('You are Missing Fields!');
    } else {
      // Execute login
      this.userService.login(this.user).subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log('Response error: ', error);
        }
      );
    }
  }
}
