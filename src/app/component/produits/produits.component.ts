import { Component, OnInit } from '@angular/core';
import { MyApiService } from 'src/app/service/my-api.service';
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  [x: string]: any;

  produits: any[] = [];
  urlImages: string = "http://localhost:8080/api/images/";

  constructor(private myApiService: MyApiService) { }

  ngOnInit() {
    this.myApiService.getProduits().subscribe((data: any) => {
      this.produits = data;
    });
  }

}
