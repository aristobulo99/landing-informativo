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


}
