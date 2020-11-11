import { Component, OnInit } from '@angular/core';
import { NgModule } from "@angular/core";

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css']
})
export class Pagina2Component implements OnInit {
  ampliaplus=true;
  amplia=true;
  limitada:boolean;
  basica:boolean;
  statusAP = "NoSelected";
  statusA= "NoSelected";

  Ampliaplus(  ) {
    // tiene selected this.statusAP
    this. ampliaplus = !this. ampliaplus;
    this.statusAP = this. ampliaplus ? "NoSelected" : "Selected";
    console.log("Amplia Plus:"+' '+this.ampliaplus+' '+this.statusAP)
  }
  Amplia(  ) {
    // tiene selected this.statusAP
    this. amplia = !this. amplia;
    this.statusA= this. amplia ? "NoSelected" : "Selected";
    console.log("Amplia :"+' '+this.amplia+' '+this.statusA)
  }

  constructor() { }

  ngOnInit(): void {
  }



}
