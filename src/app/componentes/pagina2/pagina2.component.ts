import { Component, OnInit } from '@angular/core';
import { NgModule } from "@angular/core";

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css']
})
export class Pagina2Component implements OnInit {
  clickMessage = '';
  ampliaplus=true;
  amplia:boolean;
  limitada:boolean;
  basica:boolean;
  statusAP = "NoSelected";

  Ampliaplus() {
    // tiene selected this.statusAP
    this. ampliaplus = !this. ampliaplus;
    this.statusAP = this. ampliaplus ? "NoSelected" : "Selected";
    console.log("Amplia Plus:"+' '+this.ampliaplus+' '+this.statusAP)
    
  }
  constructor() { }

  ngOnInit(): void {
  }



}
