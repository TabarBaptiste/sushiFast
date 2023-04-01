import { Component, OnInit } from '@angular/core';
import { MyApiService } from 'src/app/service/my-api.service';
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  produits: any[] = [];
  urlImages: string = "http://localhost:8080/api/images/";

  constructor(private myApiService: MyApiService) { }

  ngOnInit() {
    // Appelle la méthode getProduits() du service MyApiService
    // et souscrit à son Observable pour récupérer les données
    this.myApiService.getProduits().subscribe((data: any) => {
      this.produits = data; // Stocke les données dans la variable "produits"
    });
  }

}
