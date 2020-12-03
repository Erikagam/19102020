import { analyzeFile } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
//  para añadir script import * as $ from 'jquery'; 

@Component({
  selector: 'app-infovehiculo',
  templateUrl: './infovehiculo.component.html',
  styleUrls: ['./infovehiculo.component.css']
})
export class InfovehiculoComponent implements OnInit {
  options: { value: string; label: string; }[];
  constructor(){
  } 
  modelo: string  = '0'; // Iniciamos
  vermodelo: string        = '';
  seleccionaModelo(evento){
    console.log(evento.target.textContent)
    this.modelo=evento.target.value
    this.vermodelo=evento.target.textContent
    document.getElementById("btnmodelo").textContent = this.vermodelo;
  }
  anno: string  = '0'; // Iniciamos
  veranno: string        = '';
  seleccionaAnn(evento){
    console.log(evento.target.textContent)
    this.anno=evento.target.value
    this.veranno=evento.target.textContent
    document.getElementById("btnyear").textContent = this.veranno;
  }
  marca: string  = '0'; // Iniciamos
  vermarca: string        = '';
  seleccionaMarca(evento){
    console.log(evento.target.textContent)
    this.marca=evento.target.value
    this.vermarca=evento.target.textContent
    document.getElementById("btnmarca").textContent = this.vermarca;
  }
  descripcion: string  = '0'; // Iniciamos
  verdescripcion: string       = '';
  seleccionaDescip(evento){
    console.log(evento.target.textContent)
    this.descripcion=evento.target.value
    this.verdescripcion=evento.target.textContent
    document.getElementById("btndescr").textContent = this.verdescripcion;
  }
  ngOnInit(): void {
     this.options = [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ];
    
  }

  

}
