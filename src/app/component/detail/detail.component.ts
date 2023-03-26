import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyApiService } from 'src/app/service/my-api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  boxId: any;
  box: any;

  constructor(
    private route: ActivatedRoute,
    private myApiService: MyApiService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => { // Souscription aux modifications de la route (changement de paramètres)
      this.boxId = params.get('id'); // Récupération de l'id dans les paramètres de la route
      this.myApiService.getBoxDetails(this.boxId).subscribe((data: any) => { // Appel du service pour récupérer les détails de la box correspondante à l'id
        this.box = data; // Stockage des détails dans une variable
      });
    });
  }

}
