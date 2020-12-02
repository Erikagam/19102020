import { analyzeFile } from '@angular/compiler';
import { Component, OnInit, EventEmitter,Output } from '@angular/core';

//  para añadir script import * as $ from 'jquery'; 

@Component({
  selector: 'app-infovehiculo',
  templateUrl: './infovehiculo.component.html',
  styleUrls: ['./infovehiculo.component.css']
})
export class InfovehiculoComponent implements OnInit {
  options: { value: string; label: string; }[];
  @Output() datoscarrito= new EventEmitter<any>();
  constructor(){
  } 
  modelo: string  = '0'; // Iniciamos
  vermodelo: string        = '';
  seleccionaModelo(evento){
    console.log(evento.target.textContent)
    this.modelo=evento.target.value
    this.vermodelo=evento.target.textContent
  }
  anno: string  = '0'; // Iniciamos
  veranno: string        = '';
  seleccionaAnn(evento){
    console.log(evento.target.textContent)
    this.anno=evento.target.value
    this.veranno=evento.target.textContent
  }
  marca: string  = '0'; // Iniciamos
  vermarca: string        = '';
  seleccionaMarca(evento){
    console.log(evento.target.textContent)
    this.marca=evento.target.value
    this.vermarca=evento.target.textContent
  }
  descripcion: string  = '0'; // Iniciamos
  verdescripcion: string       = '';
  seleccionaDescip(evento){
    console.log(evento.target.textContent)
    this.descripcion=evento.target.value
    this.verdescripcion=evento.target.textContent
  }
  public emisor(){
    let datos={}
    return datos={
      modelo: this.vermodelo,
      marca: this.vermarca,
      anno:this.veranno,
      descripcion:this.verdescripcion
    }
  }

  ngOnInit(): void {
     this.options = [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ];
    
  }

  

}
