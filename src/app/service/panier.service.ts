import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Box } from '../models/box';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  // Initialise le panier avec le contenu stocké dans le localStorage
  private panier: Box[] = JSON.parse(localStorage.getItem('panier') || '[]');
  private commandes: Box[][] = JSON.parse(localStorage.getItem('commandes') || '[]'); // Initialise les commandes avec le contenu stocké dans le localStorage

  // Initialise un BehaviorSubject avec le contenu du panier
  private panierSubject: BehaviorSubject<Box[]> = new BehaviorSubject<Box[]>(this.panier);

  constructor() {
    // Initialise le panier avec le contenu stocké dans le localStorage (à nouveau, pour être sûr)
    this.panier = JSON.parse(localStorage.getItem('panier') || '[]');
  }
  // Fonction qui ajoute un produit au panier
  ajouterProduit(produit: Box): void {
    this.panier.push(produit);    // Ajoute le produit à la fin du tableau panier
    this.panierSubject.next(this.panier);    // Emet le nouveau contenu du panier aux abonnés (sous forme d'un BehaviorSubject)
    localStorage.setItem('panier', JSON.stringify(this.panier));    // Stocke le panier dans le localStorage
    console.log(this.panier);    // Affiche le contenu du panier dans la console (pour debug)
  }
  // Fonction qui retourne un BehaviorSubject avec le contenu du panier
  getProduits(): BehaviorSubject<Box[]> {
    console.log(this.panier);    // Affiche le contenu du panier dans la console (pour debug)
    return this.panierSubject;
  }

  // Fonction qui vide le panier et stocke son contenu dans les commandes
  validerCommande(): void {
    if (this.panier.length > 0) {
      this.commandes.push(this.panier);    // Ajoute le contenu du panier à la fin du tableau commandes
      localStorage.setItem('commandes', JSON.stringify(this.commandes));    // Stocke les commandes dans le localStorage
      console.log(this.commandes);    // Affiche le contenu des commandes dans la console (pour debug)
      this.panier = [];    // Vide le panier
      this.panierSubject.next(this.panier);    // Emet un panier vide aux abonnés
      localStorage.setItem('panier', JSON.stringify(this.panier));    // Stocke un panier vide dans le localStorage
    }
  }

  getQuantité(): number {
    let test: number
    test = this.panier.length
    return test
  }

}
