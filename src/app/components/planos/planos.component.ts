import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-planos',
  templateUrl: './planos.component.html',
  styleUrls: ['./planos.component.css']
})
export class PlanosComponent implements OnInit {

  public wid: string = '400';
  public hei: string = '200';

  @HostListener('window:resize', ['$event'])

  onWindowResize() {

    if(window.innerWidth < 980 ){
      this.wid = '200';
      this.hei = '100';
    }else{
      this.wid = '400';
      this.hei = '200';
    }

  }

  ngOnInit(): void {
    this. onWindowResize();
  }

  imageObject: Array<object> = [
    {
      image: '../../../assets/imagen/slider-planos/el-catillo-casa-violetas-vista-plano.jpg',
      thumbImage: '../../../assets/imagen/slider-planos/el-catillo-casa-violetas-vista-plano.jpg',
      alt: 'alt of image',
    },
    {
      image: '../../../assets/imagen/slider-planos/el-catillo-casa-violetas-vista-plano-primer-piso.jpg',
      thumbImage: '../../../assets/imagen/slider-planos/el-catillo-casa-violetas-vista-plano-primer-piso.jpg',
      alt: 'Image alt'
    },
    {
      image: '../../../assets/imagen/slider-planos/el-catillo-casa-violetas-vista-plano-segundo-piso.jpg',
      thumbImage: '../../../assets/imagen/slider-planos/el-catillo-casa-violetas-vista-plano-segundo-piso.jpg',
      alt: 'Image alt'
    }
  ];

}
