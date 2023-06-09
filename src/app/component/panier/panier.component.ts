import { Component, OnInit } from '@angular/core';
import { Box } from 'src/app/models/box';
import { PanierService } from 'src/app/service/panier.service';
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
  reduction: number = 0

  constructor(
    private panierService: PanierService,
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
    //console.log(this.panier)
    console.log(total)
    return total;
  }

  getReduc(): number {
    let reduction: number = 0;
    if (this.panierService.getQuantité() > 3) {
      reduction = this.getTotal() * .95
    }
    console.log(reduction)
    return reduction;
  }

  removeFromPanier(box: Box) {
    const index = this.panier.indexOf(box);
    if (index !== -1) {
      alert('Voulez vous supprimer ce produit ?.'); // Affiche une alerte pour confirmer la suppression de la boîte au panier
      this.panier.splice(index, 1);
      localStorage.setItem('panier', JSON.stringify(this.panier));
    }
  }

  validerCommande() {
    this.panierService.validerCommande(); // Appelle la méthode ajouterProduit() du service PanierService en lui passant la boîte en paramètre
    alert('La boîte a été ajoutée à l\'historique.'); // Affiche une alerte pour confirmer l'ajout de la boîte au panier

    console.log("Récapitulatif de la commande :");
    for (let box of this.panier) {
      console.log("Box : " + box.nom + " - Prix : " + box.prix + " €");
    }
    this.router.navigate(['/historique']);
  }
  
}

/*getTotal(): number {
  let total: number = 0;
  for (let box of this.panier) {
    total += box.prix;
  }
  console.log(total)
  if (this.panier.length > 10) {
    this.totalAvecReduction = total * 0.95; // appliquer la réduction de 5%
    return this.totalAvecReduction;
  }
  else {
    this.totalAvecReduction = total;
    return total;
  }
}*/
/*validerCommande() {
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
}*/

