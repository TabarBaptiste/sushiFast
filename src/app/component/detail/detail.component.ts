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

  panier: any = []; // Initialise la variable panier comme un tableau vide
  boxId: any; // Initialise la variable boxId à null
  box: any; // Initialise la variable box à null
  urlImages: string = "http://localhost:8080/api/images/"; // Initialise l'URL de l'API images

  constructor(
    private route: ActivatedRoute, // Injecte le service ActivatedRoute
    private myApiService: MyApiService, // Injecte le service MyApiService
    private panierService: PanierService, // Injecte le service PanierService
    private router: Router // Injecte le service Router
  ) { }

  ngOnInit(): void {
    // Récupération de l'id dans les paramètres de la route
    this.route.paramMap.subscribe(params => {
      this.boxId = params.get('id'); // Stocke l'id de la boîte dans la variable boxId
      this.myApiService.getBoxDetails(this.boxId).subscribe((data: any) => {
        this.box = data; // Stockage des détails de la boîte dans la variable box
      });
    });

    // Affichage du contenu du panier
    console.log(this.panierService.getProduits()); // Appelle la méthode getProduits() du service PanierService et affiche le contenu du panier dans la console
  }

  ajouterAuPanier(box: Box) {
    this.panierService.ajouterProduit(box); // Appelle la méthode ajouterProduit() du service PanierService en lui passant la boîte en paramètre
    alert('La boîte a été ajoutée au panier.'); // Affiche une alerte pour confirmer l'ajout de la boîte au panier
  }

  goToPanier() {
    this.router.navigate(['/panier']); // Redirige vers la page panier
  }

}
