import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPageRoutingModule } from './main-routing.module';
import { GoogleMapsModule } from "@angular/google-maps";
import { MainPage } from './main.page';

import { AccordionComponent } from './../widgets/accordion/accordion.component';
import { MapComponent } from './../components/map/map.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPageRoutingModule,
    GoogleMapsModule
  ],
  declarations: [MainPage, AccordionComponent, MapComponent]
})
export class MainPageModule {}
