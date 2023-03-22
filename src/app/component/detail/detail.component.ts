import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id: any[] = [];

  constructor(private route: ActivatedRoute,private http: HttpClient) { }

  ngOnInit(): void {
    //this.id = parseInt(this.route.snapshot.paramMap.get('id') ?? '0');

    this.http.get<any>(`${this.id}`).subscribe(
      details => {
        this.id = details;
      }
    )
  }

}
