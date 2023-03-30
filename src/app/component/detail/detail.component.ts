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
    private route: ActivatedRoute, // Service d'accès aux paramètres de la route
    private myApiService: MyApiService, // Service d'accès à l'API
    private panierService: PanierService, // Service de gestion du panier
    private router: Router // Service de navigation
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
    this.panierService.ajouterProduit(box); // Ajout de la boîte au panier via le service
    alert('La boîte a été ajoutée au panier.');
  }

  goToPanier() {
    this.router.navigate(['/panier']); // Redirection vers la page du panier
  }

}

