import { Injectable } from '@angular/core';
import { Box } from '../models/box';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  private panier: Box[] = JSON.parse(localStorage.getItem('panier') || '[]');

  constructor() {
    this.panier = JSON.parse(localStorage.getItem('panier') || '[]');
  }

  // Fonction qui ajoute un produit au panier
  ajouterProduit(produit: Box): void {
    const index = this.panier.findIndex(p => p.id === produit.id); // Recherche l'indice du produit dans le panier, s'il existe déjà
    if (index === -1) { // Si le produit n'existe pas encore dans le panier
      this.panier.push(produit); // Ajoute le produit à la fin du tableau panier
    } else { // Si le produit existe déjà dans le panier
      this.panier[index].quantite += produit.quantite; // Incrémente la quantité du produit existant avec la quantité du produit à ajouter
    }
    localStorage.setItem('panier', JSON.stringify(this.panier)); // Stocke le panier dans le localStorage
    console.log(this.panier); // Afficher le contenu du panier
  }

  supprimerProduit(produit: Box): void {
    const index = this.panier.findIndex(p => p.id === produit.id);
    if (index !== -1) {
      this.panier.splice(index, 1);
      localStorage.setItem('panier', JSON.stringify(this.panier)); // Stocke le panier dans le localStorage
    }
  }

  getProduits(): Box[] {
    console.log(this.panier); // ajouter cette instruction
    return this.panier;
  }

}
