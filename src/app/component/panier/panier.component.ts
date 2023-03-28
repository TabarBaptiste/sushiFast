import { Component, OnInit } from '@angular/core';
import { PanierService } from 'src/app/service/panier.service';
import { Box } from 'src/app/models/box';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  panier: Box[] = [];

  constructor(
    private panierService: PanierService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.panier = this.panierService.getProduits();
    console.log(this.panier); // ajouter cette instruction
  }

  supprimerProduit(index: any): void {
    this.panierService.supprimerProduit(index);
    this.panier = this.panierService.getProduits();
  }

  ajouterProduit(produit: any): void {
    this.panierService.ajouterProduit(produit);
    this.panier = this.panierService.getProduits();
    console.log(this.panier);
    this.router.navigate(['/panier']);
  }

  /*commander(): void {
    this.panierService.commander();
    this.panier = this.panierService.getProduits();
  }*/

}
