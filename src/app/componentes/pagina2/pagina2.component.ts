import { Component, OnInit } from '@angular/core';
import { NgModule } from "@angular/core";

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css']
})
export class Pagina2Component implements OnInit {
  ampliaplus=false;
  amplia=false;
  limitada=false;
  basica=false;
  statusAP = "NoSelected";
  statusA= "NoSelected";
  statusL= "NoSelected";
  statusB= "NoSelected";
  Ampliaplus( ) {
    // tiene selected this.statusAP
    this. ampliaplus = !this. ampliaplus;
    this.statusAP = this. ampliaplus ? "Selected"  :"NoSelected";
    console.log("Amplia Plus:"+' '+this.ampliaplus+' '+this.statusAP)
  }
  Amplia( ) {
    // tiene selected this.statusA
    this. amplia = !this. amplia;
    this.statusA= this. amplia ? "Selected" : "NoSelected";
    console.log("Amplia :"+' '+this.amplia+' '+this.statusA)
  }
  Limitada( ) {
    // tiene selected this.statusL
    this. limitada = !this. limitada;
    this.statusL= this. limitada ? "Selected" : "NoSelected" ;
    console.log("Limitada :"+' '+this.limitada+' '+this.statusL)
  }
  Basica( ) {
    // tiene selected this.statusB
    this. basica = !this. basica;
    this.statusB= this. basica  ? "Selected" : "NoSelected" ;
    console.log("Básica :"+' '+this.basica+' '+this.statusB)
  }

  descALTO=false;
  descMEDIO=false;
  descBAJO=false;
  statusDA = "NoSelected";
  statusDM= "NoSelected";
  statusDB= "NoSelected";
  Descuentoalto( ) {
    // tiene selected this.statusDA
    this. descALTO = !this. descALTO;
    this.statusDA = this. descALTO ? "Selected"  :"NoSelected";
    console.log("Descuento Alto:"+' '+this.descALTO+' '+this.statusDA)
  }
 Descuentomedio( ) {
    // tiene selected this.statusDM
    this. descMEDIO = !this. descMEDIO;
    this.statusDM= this. descMEDIO ? "Selected" : "NoSelected";
    console.log("Descuento Medio :"+' '+this.descMEDIO+' '+this.statusDM)
  }
  Descuentobajo( ) {
    // tiene selected this.statusDB
    this. descBAJO = !this. descBAJO;
    this.statusDB= this. descBAJO ? "Selected" : "NoSelected" ;
    console.log("Descuento Bajo :"+' '+this.descBAJO+' '+this.statusDB)
  }
  
  mensual=false;
  trimestral=false;
  semestral=false;
  anual=false;
  statusM = "NoSelected";
  statusT= "NoSelected";
  statusS= "NoSelected";
  statusAn= "NoSelected";
  Mensual( ) {
    // tiene selected this.statusM
    this. mensual = !this. mensual;
    this.statusM = this. mensual ? "Selected"  :"NoSelected";
    console.log("Mensual:"+' '+this.mensual+' '+this.statusM)
  }
  Trimestral( ) {
    // tiene selected this.statusT
    this. trimestral = !this. trimestral;
    this.statusT= this. trimestral ? "Selected" : "NoSelected";
    console.log("Trimestral :"+' '+this.trimestral+' '+this.statusT)
  }
  Semestral( ) {
    // tiene selected this.statusS
    this. semestral = !this. semestral;
    this.statusS= this. semestral ? "Selected" : "NoSelected" ;
    console.log("Semestral :"+' '+this.semestral+' '+this.statusS)
  }
  Anual( ) {
    // tiene selected this.statusAn
    this. anual = !this. anual;
    this.statusAn= this. anual  ? "Selected" : "NoSelected" ;
    console.log("Anual :"+' '+this.anual+' '+this.statusAn)
  }

  RT(event){
    console.log(event.target.valueAsNumber)
  }

 
  constructor() { }

  ngOnInit(): void {
  }



}
