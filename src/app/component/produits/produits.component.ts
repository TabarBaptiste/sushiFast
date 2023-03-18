import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  produits: any[] = [];
  images: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>(`${environment.apiUrl}`).subscribe(
      boxes => {
        this.produits = boxes;
      },
      error => {
        console.error('Une erreur est survenue lors de la récupération des produits :', error);
      }
    );
  }

}
