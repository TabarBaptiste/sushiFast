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
    this.boxId = this.route.snapshot.paramMap.get('id');

    this.myApiService.getBoxDetails(this.boxId).subscribe((data: any) => {
      this.box = data;
    });
  }

}
