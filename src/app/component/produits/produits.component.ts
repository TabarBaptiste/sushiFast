import { Component, OnInit } from '@angular/core';
import { MyApiService } from 'src/app/service/my-api.service';
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  produits: any[] = [];

  constructor(private myApiService: MyApiService) { }

  ngOnInit() {
    this.myApiService.getProduits().subscribe((data: any) => {
      this.produits = data;
    });
  }

}
