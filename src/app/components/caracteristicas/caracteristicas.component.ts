import { Component, HostListener, OnInit } from '@angular/core';
import { descrCaract } from 'src/app/models/head-nav.models';

@Component({
  selector: 'app-caracteristicas',
  templateUrl: './caracteristicas.component.html',
  styleUrls: ['./caracteristicas.component.css']
})
export class CaracteristicasComponent implements OnInit{

  public numColum: string = '4';

  @HostListener('window:resize', ['$event'])

  onWindowResize() {

    if(window.innerWidth < 770 ){
      this.numColum = '2';
    }else{
      this.numColum = '4';
    }


  }

  ngOnInit(): void {
    this.onWindowResize();
  }


  public cracteObjet: Array<descrCaract> = [
    {
      description: 'Área Construida: 108.24 m2'
    },
    {
      description: 'Área Privada: 93.36 m2'
    },
    {
      description: 'Estado: Sobre planos'
    },
    {
      description: 'Alcobas: 3'
    },
    {
      description: 'Baños: 3'
    },
    {
      description: 'Garajes: 1'
    },
    {
      description: 'Estrato: 5'
    },
    {
      description: 'Acabados: Nivel 2 - Obra Gris'
    },
    {
      description: 'Características Garaje: Independiente'
    },
    {
      description: 'Tipo de garaje: Cubierto'
    },
    {
      description: 'Niveles del inmueble: 2'
    },
    {
      description: 'Sala/Comedor: Integrado'
    },
    {
      description: 'Ubicación vista: Interior y Exterior'
    },
    {
      description: 'Baño social'
    },
    {
      description: 'Cocina integral'
    },
    {
      description: 'Depósito'
    },
    {
      description: 'Estar de alcobas'
    },
    {
      description: 'Estudio'
    },
    {
      description: 'Patio interior'
    },
    {
      description: 'Servicio de gas natural'
    },
    {
      description: 'Zona de ropas'
    },
    {
      description: 'Zona de ropas independiente'
    }
  ]

}
