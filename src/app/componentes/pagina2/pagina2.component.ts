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

  constructor() { }

  ngOnInit(): void {
  }



}
