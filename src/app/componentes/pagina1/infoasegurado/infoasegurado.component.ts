import { Component, OnInit } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';


@Component({
  selector: 'app-infoasegurado',
  templateUrl: './infoasegurado.component.html',
  styleUrls: ['./infoasegurado.component.css']
})
export class InfoaseguradoComponent implements OnInit {
  bisiesto: boolean;
  dias;
  meses;
  fechaannos;
  mesdiabis: (string | number)[][];
  mesdia: (string | number)[][];
  
  constructor(){
  } 
  mes: string  = ''; // Iniciamos mes 
  vermes: string        = '';
  capturarmes(evento) {
    // console.log(evento.target.textContent)
    this.vermes=evento.target.textContent
    this.mes=evento.target.value
    this.calculabis()
  }
  
  fechaann: string  = ''; // Iniciamos fechaann 
  verfechaann: string        = '';
  capturarfechaann(evento) {
    // console.log(evento.target.textContent)
    this.verfechaann=evento.target.textContent
    this.fechaann=evento.target.value
    this.calculabis()
    }
  

  dia: string  = ''; // Iniciamos dia
// console.log(this.mesdiabis[0][1])//DIAS
// console.log(this.mesdiabis[0][0])//MESES
  verdia: string        = '';
  capturardia(evento) {
    
  }
  

  calculabis() {
    if (this.verfechaann!='' && this.vermes!='') {
      var numerican = Number(this.verfechaann);
      console.log(this.verfechaann+' ' + this.vermes)
    numerican%4==0 ?(numerican%100==0 ?(numerican%400==0 ?(this.bisiesto=true) : (this.bisiesto=false)) : (this.bisiesto=true)) : (this.bisiesto=false)
    //this.bisiesto ? (console.log(this.mesdiabis)) :(console.log(this.mesdia))
    if (this.bisiesto) {
      console.log(numerican  +' '+"BISIESTO")
      for (let index = 0; index < 12; index++) {
        if (this.mesdiabis[index][0]==this.vermes) {
          var hastaaquibi = Number(this.mesdiabis[index][1]);
          console.log( hastaaquibi +' '+ this.vermes)
          for (let index = 1 ; index <= hastaaquibi; index++) {
            this.dias.push(index)
          }
        }
      }
    } else {
      console.log(numerican +' '+"NO BISIESTO")
      for (let index = 0; this.mesdia.length; index++) {
        if (this.mesdia[index][0]===this.vermes) {
          var hastaaqui = Number(this.mesdia[index][1]);
          console.log(this.mesdia[index][1])
          console.log( hastaaqui+' '+ this.vermes)
          for (let index = 1 ; index <= hastaaqui; index++) {
            this.dias.push(index)
          }
        }
      }
      }
    }else{
      console.log("Te falta")
    }
  }
    ngOnInit( ): void {
      this.mesdiabis=[
        ['Enero',31],
        ['Febrero',29],
        ['Marzo',31],
        ['Abril',30],
        ['Mayo',31],
        ['Junio',30],
        ['Julio',31],
        ['Agosto',31],
        ['Septiembre',30],
        ['Octubre',31],
        ['Noviembre',30],
        ['Diciembre',31],
      ]
      this.mesdia=[
        ['Enero',31],
        ['Febrero',28],
        ['Marzo',31],
        ['Abril',30],
        ['Mayo',31],
        ['Junio',30],
        ['Julio',31],
        ['Agosto',31],
        ['Septiembre',30],
        ['Octubre',31],
        ['Noviembre',30],
        ['Diciembre',31],
      ]
      this.meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
      this.dias=[]
      this.fechaannos=[]
      var today = new Date();
      var year = today.getFullYear();
     for (let index = 1900; index <= year-18; index++) {// VALIDACION PARA QUE SEA MAYOR DE EDAD
       this.fechaannos.push(index)
     }
    }
  }

  
  

  


