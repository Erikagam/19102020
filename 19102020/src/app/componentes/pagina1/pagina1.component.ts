import { Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component implements OnInit {

 
  // @Output() mandaapag2 = new EventEmitter<{sm:any, sy:any, sd: any ,modelo:any,marca:any,descrpcion:any,anno:any}>(); 
  //Variables fecha de nacimiento
    sm:String='';
    sy:String='';
    sd:String='';
  //Variables carro
    modelo:String='';
    marca:String='';
    descripcion:String='';
    anno:String='';

  a(e) {
    console.log(e);
    this.modelo=e
  }
  b(e) {
    console.log(e);
    this.anno=e
  }
  c(e) {
    console.log(e);
    this.marca=e
  }
  d(e) {
    console.log(e);
    this.descripcion=e
  }
  f(e) {
    console.log(e);
    this.sd=e
  }
  g(e) {
    console.log(e);
    this.sm=e
  }
  h(e) {
    console.log(e);
    this.sy=e
  }
   
  constructor() { }

  ngOnInit(): void {
  }

}
