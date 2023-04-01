import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MyApiService {

  constructor(private http: HttpClient) { }

  // Récupération de tous les produits
  getProduits() {
    return this.http.get(`${environment.apiUrl}`);
  }

  // Récupération des détails d'une boîte spécifique via son id
  getBoxDetails(id: number) {
    return this.http.get(`${environment.apiUrl}/${id}`);
  }

}

