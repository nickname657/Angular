import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '../models/store.model';

const baseUrl = 'http://localhost:8080/bikestore/stores';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Store[]>{
    return this.http.get<Store[]>(baseUrl);
  }

  get(id: any): Observable<Store> {
    return this.http.get<Store>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByName(name: any): Observable<Store[]> {
    return this.http.get<Store[]>(`${baseUrl}?name=${name}`);
  }
}
