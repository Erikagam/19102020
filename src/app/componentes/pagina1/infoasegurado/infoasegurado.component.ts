import { Component, OnInit } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';

@Component({
  selector: 'app-infoasegurado',
  templateUrl: './infoasegurado.component.html',
  styleUrls: ['./infoasegurado.component.css']
})
export class InfoaseguradoComponent implements OnInit {
  dias;
  meses;
  fechaannos;
  constructor(){
  
  } 

  mes: string  = ''; // Iniciamos mes 
  vermes: string        = '';
  capturarmes() {
    this.vermes = this.mes;
  }
  
  dia: string  = ''; // Iniciamos dia 
  verdia: string        = '';
  capturardia() {
    this.verdia = this.dia;
  }
  
  fechaann: string  = ''; // Iniciamos fechaann 
  verfechaann: string        = '';
  capturarfechaann() {
    this.verfechaann = this.fechaann;
  }


  ngOnInit(): void {
    this.meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    this.dias=[]
    this.fechaannos=[]
  }
}


