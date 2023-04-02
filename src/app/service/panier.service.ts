import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Box } from '../models/box';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  // Initialise le panier avec le contenu stocké dans le localStorage
  private panier: Box[] = JSON.parse(localStorage.getItem('panier') || '[]');

  // Initialise un BehaviorSubject avec le contenu du panier
  private panierSubject: BehaviorSubject<Box[]> = new BehaviorSubject<Box[]>(this.panier);

  constructor() {
    // Initialise le panier avec le contenu stocké dans le localStorage (à nouveau, pour être sûr)
    this.panier = JSON.parse(localStorage.getItem('panier') || '[]');
  }
  // Fonction qui ajoute un produit au panier
  ajouterProduit(produit: Box): void {
    // Ajoute le produit à la fin du tableau panier
    this.panier.push(produit);
    // Emet le nouveau contenu du panier aux abonnés (sous forme d'un BehaviorSubject)
    this.panierSubject.next(this.panier);
    // Stocke le panier dans le localStorage
    localStorage.setItem('panier', JSON.stringify(this.panier));
    // Affiche le contenu du panier dans la console (pour debug)
    console.log(this.panier);
  }
  // Fonction qui retourne un BehaviorSubject avec le contenu du panier
  getProduits(): BehaviorSubject<Box[]> {
    // Affiche le contenu du panier dans la console (pour debug)
    console.log(this.panier);
    return this.panierSubject;
  }
}
