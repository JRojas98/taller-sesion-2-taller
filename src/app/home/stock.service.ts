import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor( private http: HttpClient) { }

  getProducto(){
    return this.http.get('./assets/data/productos.json')//.subscribe( data =>{
   //   console.log(data);
  //  });
  }

  updateProducto(){

  }
}
