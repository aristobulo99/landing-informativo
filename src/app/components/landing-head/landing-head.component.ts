import { Component } from '@angular/core';
import { headNav } from 'src/app/models/head-nav.models';

@Component({
  selector: 'app-landing-head',
  templateUrl: './landing-head.component.html',
  styleUrls: ['./landing-head.component.css']
})
export class LandingHeadComponent {

  public ejecuteMenuDesple: boolean = false;
  public modelSelect: headNav ={
    inicio: true,
    Carac: false,
    Plano: false,
    Ubic: false,
    Contacto: false
  }

  seletButtoMenu(){
    this.ejecuteMenuDesple = !this.ejecuteMenuDesple;
  }

  selectInicio(): void{
    this.modelSelect.Carac = false;
    this.modelSelect.inicio = true;
    this.modelSelect.Plano = false;
    this.modelSelect.Ubic = false;
    this.modelSelect.Contacto = false;
  }

  selectCaract(): void{
    this.modelSelect.Carac = true;
    this.modelSelect.inicio = false;
    this.modelSelect.Plano = false;
    this.modelSelect.Ubic = false;
    this.modelSelect.Contacto = false;
  }

  selectPlano(): void{
    this.modelSelect.Carac = false;
    this.modelSelect.inicio = false;
    this.modelSelect.Plano = true;
    this.modelSelect.Ubic = false;
    this.modelSelect.Contacto = false;
  }

  selectUbic(): void{
    this.modelSelect.Carac = false;
    this.modelSelect.inicio = false;
    this.modelSelect.Plano = false;
    this.modelSelect.Ubic = true;
    this.modelSelect.Contacto = false;
  }

  selectContac(): void{
    this.modelSelect.Carac = false;
    this.modelSelect.inicio = false;
    this.modelSelect.Plano = false;
    this.modelSelect.Ubic = false;
    this.modelSelect.Contacto = true;
  }

}
