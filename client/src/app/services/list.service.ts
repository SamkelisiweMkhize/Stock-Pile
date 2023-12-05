import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { env } from 'src/enviroment/enviroment';
import { ListInterface } from '../interface/list';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor(private http: HttpClient) {}

  getallListFunc(): Observable<ListInterface[]> {
    return this.http.get<ListInterface[]>(`${env.SERVER_URL}/api/stock/items`);
  }

  addToListFunc(
    name: string,
    description: string
  ): Observable<ListInterface[]> {
    return this.http.post<ListInterface[]>(
      `${env.SERVER_URL}/api/stock/create`,
      { name, description }
    );
  }

  removeFromListFunc(id: string): Observable<ListInterface[]> {
    return this.http.delete<ListInterface[]>(
      `${env.SERVER_URL}/api/stock/items/${id}`
    );
  }
  updateToListFunc(
    name: string,
    description: string
  ): Observable<ListInterface[]> {
    return this.http.post<ListInterface[]>(
      `${env.SERVER_URL}/api/stock/itms`,
      { name, description }
    );
  }
}
