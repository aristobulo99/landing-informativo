import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { LandingHeadComponent } from './landing-head/landing-head.component';
import {MatMenuModule} from '@angular/material/menu';
import { NgImageSliderModule } from 'ng-image-slider';
import {MatDividerModule} from '@angular/material/divider';
import { CaracteristicasComponent } from './caracteristicas/caracteristicas.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import { PlanosComponent } from './planos/planos.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { FooterLandingComponent } from './footer-landing/footer-landing.component';


@NgModule({
  declarations: [
    HomeComponent,
    LandingHeadComponent,
    CaracteristicasComponent,
    PlanosComponent,
    UbicacionComponent,
    FooterLandingComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    NgImageSliderModule,
    MatDividerModule,
    MatGridListModule,
    MatIconModule
  ],
  exports: [
    HomeComponent
  ]
})
export class ComponentsModule { }
