import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { LandingHeadComponent } from './landing-head/landing-head.component';
import {MatMenuModule} from '@angular/material/menu';
import { NgImageSliderModule } from 'ng-image-slider';
import {MatDividerModule} from '@angular/material/divider';
import { CaracteristicasComponent } from './caracteristicas/caracteristicas.component';


@NgModule({
  declarations: [
    HomeComponent,
    LandingHeadComponent,
    CaracteristicasComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    NgImageSliderModule,
    MatDividerModule
  ],
  exports: [
    HomeComponent
  ]
})
export class ComponentsModule { }
