import { Component } from '@angular/core';
import { Box } from 'src/app/models/box';
import { PanierService } from 'src/app/service/panier.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private panierService: PanierService) { }

  panier: Box[] = [];

  ngOnInit(): void {
    let panier: any = localStorage.getItem('panier');
    if (panier) {
      this.panier = JSON.parse(panier);
      console.log(this.panier);
    }
  }

  /*getReduc(): number {
    let panier: number = 0;
    if (this.panierService.getQuantité() > 3){
      panier = 3;
    }
    return panier
  }*/
}