import { Component, OnInit } from '@angular/core';
import { computeStackId } from '@ionic/angular/directives/navigation/stack-utils';
import { StockService } from '../stock.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-super',
  templateUrl: './super.page.html',
  styleUrls: ['./super.page.scss'],
})
export class SuperPage implements OnInit {
  
  product: any = [];
  selectedLanguage = 'en';
  constructor(private stockService:StockService, 
    private translateService: TranslateService
    ) { }

  ngOnInit() {
    this.cargarDatos();
  }
  suma(item){
    console.log(item);
  }
  resta (item){
    console.log(item);
  }

  cargarDatos(){
    this.stockService.getProducto().subscribe(data => {
      this.product  = data['products']
  });
  }

  selectLanguage(lang: string) {
    this.translateService.use(lang);
    }
}
