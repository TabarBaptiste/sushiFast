import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Box } from 'src/app/models/box';
import { MyApiService } from 'src/app/service/my-api.service';
import { PanierService } from 'src/app/service/panier.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  panier: any = [];
  boxId: any;
  box: any;
  urlImages: string = "http://localhost:8080/api/images/";

  constructor(
    private route: ActivatedRoute,
    private myApiService: MyApiService,
    private panierService: PanierService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Récupération de l'id dans les paramètres de la route
    this.route.paramMap.subscribe(params => {
      this.boxId = params.get('id');
      this.myApiService.getBoxDetails(this.boxId).subscribe((data: any) => {
        this.box = data; // Stockage des détails dans une variable
      });
    });

    // Affichage du contenu du panier
    console.log(this.panierService.getProduits());
  }

  ajouterAuPanier(box: Box) {
    this.panierService.ajouterProduit(box);
    alert('La boîte a été ajoutée au panier.');
  }

  /*addPanier(box: Box) {
    let panier: any = localStorage.getItem('panier');
    if (!panier) {
      panier = [];
    } else {
      panier = JSON.parse(panier);
    }
    panier.push(box);
    localStorage.setItem('panier', JSON.stringify(panier));
    alert('La boîte a été ajoutée au panier.');
  }*/

  goToPanier() {
    this.router.navigate(['/panier']);
  }

}
