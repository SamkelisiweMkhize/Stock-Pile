import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { listInterface } from '../interface/list';
import { read } from '@popperjs/core';


@Injectable({
  providedIn: 'root'
})
export class ListService {
  postsUrl: any;
  baseUrl: any;

  constructor(private http: HttpClient) {}

  getallListFunc():Observable<any>{ 
    return this.http.get(`${this.baseUrl}/read`)
  }
}
