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
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BannerDialogComponent } from './banner-dialog/banner-dialog.component';


@NgModule({
  declarations: [
    HomeComponent,
    LandingHeadComponent,
    CaracteristicasComponent,
    PlanosComponent,
    UbicacionComponent,
    FooterLandingComponent,
    SnackBarComponent,
    BannerDialogComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    NgImageSliderModule,
    MatDividerModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  exports: [
    HomeComponent
  ]
})
export class ComponentsModule { }
