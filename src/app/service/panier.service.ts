import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Box } from '../models/box';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  private panier: Box[] = JSON.parse(localStorage.getItem('panier') || '[]');
  private panierSubject: BehaviorSubject<Box[]> = new BehaviorSubject<Box[]>(this.panier);

  constructor() {
    this.panier = JSON.parse(localStorage.getItem('panier') || '[]');
  }

  // Fonction qui ajoute un produit au panier
  ajouterProduit(produit: Box): void {
    this.panier.push(produit); // Ajoute le produit à la fin du tableau panier
    this.panierSubject.next(this.panier);
    localStorage.setItem('panier', JSON.stringify(this.panier)); // Stocke le panier dans le localStorage
    console.log(this.panier); // Afficher le contenu du panier
  }

  getProduits(): BehaviorSubject<Box[]> {
    console.log(this.panier); // ajouter cette instruction
    return this.panierSubject;
  }

}
