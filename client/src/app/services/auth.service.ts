import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interface/user';
import { Router } from '@angular/router';
import { env } from 'src/enviroment/enviroment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  auth: User | undefined;
  user: any;

  constructor(private httpClient:HttpClient) { }

   // login function
  loginFn(email: string, password: string): Observable<User> {
    return this.httpClient.post<User>(env.SERVER_URL + '/auth/login', {
      email,
      password,
    });
  }


  // register function
  registerFn(user: User): Observable<User> {
    return this.httpClient.post<User>(env.SERVER_URL + '/auth/register', 
      user
    );
  }


  // save user data to local storage
  setUserData(data: User) {
    this.auth = data;
    localStorage.setItem('user', JSON.stringify(data));
  }


//   // get user data from local storage
  getUserData() {
    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user') || '');
    }
    return this.user;
  }
}