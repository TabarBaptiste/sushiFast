import { Component } from '@angular/core';
import { Box } from '../../models/box';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent {

  commandeValidee: Box[] = [];

  constructor() { }

  ngOnInit(): void {
    const commandeValidee = localStorage.getItem('commandeValidee');
    if (commandeValidee) {
      this.commandeValidee = JSON.parse(commandeValidee);
      console.log(this.commandeValidee); // Vérifier que les données sont correctement stockées dans la variable commandeValidee
    }
  }

  getTotal(): number {
    let total: number = 0;
    for (let box of this.commandeValidee) {
      total += box.prix;
    }
    return total;
  }
}
