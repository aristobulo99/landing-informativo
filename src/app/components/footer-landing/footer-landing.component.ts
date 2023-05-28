import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';

@Component({
  selector: 'app-footer-landing',
  templateUrl: './footer-landing.component.html',
  styleUrls: ['./footer-landing.component.css']
})
export class FooterLandingComponent implements OnInit {

  public formGroup: any|FormGroup;

  constructor(private _snackBar: MatSnackBar){}

  ngOnInit(): void {
    this.reactiveForm();
  }

  reactiveForm(): void{
    this.formGroup = new FormGroup(
      {
        nombre: new FormControl('',[Validators.required, Validators.minLength(3)]),
        apellido: new FormControl('',[Validators.required, Validators.minLength(3)]),
        telefono: new FormControl('',[Validators.required]),
        email: new FormControl('',[Validators.required, Validators.email]),
      }
    );
  }

  enviarDato(): void{
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: 3000,
    });
    this.formGroup.reset()
  }

  get formNombre(){
    return this.formGroup.get('nombre');
  }

  get formApellido(){
    return this.formGroup?.get('apellido');
  }

  get formTelefono(){
    return this.formGroup?.get('telefono');
  }

  get formEmail(){
    return this.formGroup?.get('email');
  }

}
