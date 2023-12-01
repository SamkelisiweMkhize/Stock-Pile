import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ListService {
  postsUrl: any;

  constructor(private http: HttpClient) {}

  // getPosts(id: number | string): Observable {
  //   const url = `${this.postsUrl}/${id}`;
  //   return this.http.get(url);
  // }
}
