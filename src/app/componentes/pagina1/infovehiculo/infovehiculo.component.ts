import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infovehiculo',
  templateUrl: './infovehiculo.component.html',
  styleUrls: ['./infovehiculo.component.css']
})
export class InfovehiculoComponent implements OnInit {
  datos;
  constructor(){
  
  } 

  modelo: string  = '0'; // Iniciamos
  vermodelo: string        = '';
  capturarmodelo() {
    this.vermodelo = this.modelo;
  }

  anno: string  = '0'; // Iniciamos
  veranno: string        = '';
  capturaranno() {
    this.veranno = this.anno;
  }

  marca: string  = '0'; // Iniciamos
  vermarca: string        = '';
  capturarmarca() {
    this.vermarca = this.marca;
  }

  descripcion: string  = '0'; // Iniciamos
  verdescripcion: string        = '';
  capturardescripcion() {
    this.verdescripcion = this.descripcion;
  }
  ngOnInit(): void {
    this.datos = [1,2,3,4,5,6,7,8,9,10];
  }

  

}
