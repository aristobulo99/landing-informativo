import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BannerDialogComponent } from '../banner-dialog/banner-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(public dialog: MatDialog){}

  ngOnInit(): void {
    this.onWindowResize();
    this.dialog.open(BannerDialogComponent)
  }

  public wid: string = '679';
  public hei: string = '359';

  @HostListener('window:resize', ['$event'])

  onWindowResize() {

    if(window.innerWidth < 980 ){
      this.wid = '275';
      this.hei = '150';
    }else{
      this.wid = '679';
      this.hei = '359';
    }

  }

  imageObject: Array<object> = [
    {
      image: '../../../assets/imagen/slider/el-catillo-casa-violetas-sala-2.jpg',
      thumbImage: '../../../assets/imagen/slider/el-catillo-casa-violetas-sala-2.jpg',
      alt: 'alt of image',
    },{
      image: '../../../assets/imagen/slider/el-catillo-casa-violetas-sala-exterior.jpg',
      thumbImage: '../../../assets/imagen/slider/el-catillo-casa-violetas-sala-exterior.jpg',
      alt: 'Image alt'

    },
    {
      image: '../../../assets/imagen/slider/el-catillo-casa-violetas-sala-tv.jpg',
      thumbImage: '../../../assets/imagen/slider/el-catillo-casa-violetas-sala-tv.jpg',
      alt: 'Image alt'

    },
    {
      image: '../../../assets/imagen/slider/el-catillo-casa-violetas-sala.jpg',
      thumbImage: '../../../assets/imagen/slider/el-catillo-casa-violetas-sala.jpg',
      alt: 'Image alt'

    },
    {
      image: '../../../assets/imagen/slider/el-catillo-casa-violetas-vista-casa.jpg',
      thumbImage: '../../../assets/imagen/slider/el-catillo-casa-violetas-vista-casa.jpg',
      alt: 'Image alt'

    },
    {
      image: '../../../assets/imagen/slider/el-catillo-casa-violetas-vista-comedor.jpg',
      thumbImage: '../../../assets/imagen/slider/el-catillo-casa-violetas-vista-comedor.jpg',
      alt: 'Image alt'

    },
    {
      image: '../../../assets/imagen/slider/el-catillo-casa-violetas-vista-habitacion-prin.jpg',
      thumbImage: '../../../assets/imagen/slider/el-catillo-casa-violetas-vista-habitacion-prin.jpg',
      alt: 'Image alt'

    },
    {
      image: '../../../assets/imagen/slider/el-catillo-casa-violetas-vista-habitacion.jpg',
      thumbImage: '../../../assets/imagen/slider/el-catillo-casa-violetas-vista-habitacion.jpg',
      alt: 'Image alt'

    },
    {
      image: '../../../assets/imagen/slider/el-catillo-casa-violetas-vista-habitacion2.jpg',
      thumbImage: '../../../assets/imagen/slider/el-catillo-casa-violetas-vista-habitacion2.jpg',
      alt: 'Image alt'
    },
    {
      image: '../../../assets/imagen/slider/el-catillo-casa-violetas-vista-sala.jpg',
      thumbImage: '../../../assets/imagen/slider/el-catillo-casa-violetas-vista-sala.jpg',
      alt: 'Image alt'
    }
  ];

  videoObjeto: Array<object> = [
    {
      video: 'https://youtu.be/bIV3mX9Ka7A'
    }
  ]

  public selectSlider: boolean = true;

  selectImagen(){
    this.selectSlider = true;
  }

  sselectVideo(){
    this.selectSlider = false;
  }

}
