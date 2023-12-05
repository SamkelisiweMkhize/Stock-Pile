import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, UserRequest } from '../interface/user';
import { env } from 'src/enviroment/enviroment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  auth: User | undefined;
  user!: User;

  constructor(private httpClient: HttpClient) {}

  // login function
  loginFn(user: User): Observable<UserRequest> {
    return this.httpClient.post<UserRequest>(
      env.SERVER_URL + '/api/users/login',
      user
    );
  }

  // register function
  registerFn(user: User): Observable<UserRequest> {
    return this.httpClient.post<UserRequest>(
      env.SERVER_URL + '/api/users/register',
      user
    );
  }

  // save user data to local storage
  setUserData(data: User) {
    this.auth = data;
    localStorage.setItem('user', JSON.stringify(data));
  }

  // get user data from local storage
  getUserData() {
    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user') || '');
    }
    return this.user;
  }
}
