import { Component, OnInit } from '@angular/core';
import { environment } from "src/environments/environment"

@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.component.html',
  styleUrls: ['./anuncios.component.scss'],
})
export class AnunciosComponent implements OnInit {

  title = environment.shop.title
  constructor() { }

  ngOnInit() {}

}
