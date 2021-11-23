import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuperPageRoutingModule } from './super-routing.module';

import { SuperPage } from './super.page';
import { TranslateModule } from '@ngx-translate/core';

import { AnunciosComponent } from '../core/components/anuncios/anuncios.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuperPageRoutingModule,
    TranslateModule
    
  ],
  declarations: [SuperPage, AnunciosComponent],
  exports:[
    AnunciosComponent
  ]
})
export class SuperPageModule {

}
