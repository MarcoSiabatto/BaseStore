import { Injectable } from '@angular/core';
// Import necessary modules
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from './GLOBAL';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // URL variable
  public url;
  public user;
  // Token and identity variables
  public token: any;
  public identity: any;
  // Class constructor
  constructor(private http: HttpClient) {
    this.url = global.url;
    // Initialize user
    this.user = new User('', '', '', '', 0, '', false);
  }
  // Login method
  login(user: User, getToken = true): Observable<any> {
    // User data Variable
    let json = user;
    // Validate if token came in
    !getToken ? '' : user.getToken = true;
    // Request Headers
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    // Return backend response
    return this.http.post(this.url + 'login', json, { headers: headers });
  }
  // Token Method
  getToken(): Observable<any> {
    let token = localStorage.getItem('token');
    token ? (this.token = token) : (this.token = false);
    return this.token;
  }
  // User data method
  getIdentity(): Observable<any> {
    let identity = localStorage.getItem('identity');
    identity ? (this.identity = identity) : (this.identity = false);
    return this.identity;
  }
}
