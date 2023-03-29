import { Component, OnInit } from '@angular/core';
//import { PanierService } from 'src/app/service/panier.service';
import { Box } from 'src/app/models/box';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  panier: Box[] = [];
  urlImages: string = "http://localhost:8080/api/images/";
  total: number = 0;

  constructor(
    //private panierService: PanierService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let panier: any = localStorage.getItem('panier');
    if (panier) {
      this.panier = JSON.parse(panier);
      console.log(this.panier);
    }
  }

  getTotal(): number {
    let total: number = 0;
    for (let box of this.panier) {
      total += box.prix;
    }
    console.log(this.panier)
    console.log(total)
    return total;
  }

  removeFromPanier(box: Box) {
    const index = this.panier.indexOf(box);
    if (index !== -1) {
      this.panier.splice(index, 1);
      localStorage.setItem('panier', JSON.stringify(this.panier));
    }
  }

  validerCommande() {
    // Récupérer les informations du panier depuis le localstorage
    let panier: any = localStorage.getItem('panier');
    if (panier) {
      this.panier = JSON.parse(panier);

      // Afficher un récapitulatif de chaque box commandée
      console.log("Récapitulatif de la commande :");
      for (let box of this.panier) {
        console.log("Box : " + box.nom + " - Prix : " + box.prix + " €");
      }

      // Enregistrer les informations de la commande dans l'historique
      let historique: any = localStorage.getItem('historique');
      if (!historique) {
        historique = [];
      } else {
        historique = JSON.parse(historique);
      }
      historique.push(this.panier);
      localStorage.setItem('historique', JSON.stringify(historique));

      // Vider le panier et enregistrer les modifications dans le localstorage
      this.panier = [];
      localStorage.setItem('panier', JSON.stringify(this.panier));
      this.router.navigate(['/historique']);
    }
  }

  /*commander(): void {
    this.panierService.commander();
    this.panier = this.panierService.getProduits();
  }*/

}
