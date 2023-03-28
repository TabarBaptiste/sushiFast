import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MyApiService {

  constructor(private http: HttpClient) { }

  getProduits() {
    return this.http.get(`${environment.apiUrl}`);
  }

  getBoxDetails(id: number) {
    return this.http.get(`${environment.apiUrl}/${id}`);
  }

}
