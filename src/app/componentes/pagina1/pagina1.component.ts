import { Component, OnInit, ViewChild} from '@angular/core';
import { from } from 'rxjs';
import {InfovehiculoComponent} from './infovehiculo/infovehiculo.component'
@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component implements OnInit {

  @ViewChild('infovehiculo') infovehiculo: InfovehiculoComponent 
   datoasvehi;
  public cotiza(){
    this.datoasvehi=this.infovehiculo.emisor()
    console.log(this.datoasvehi,'Éstos son los datos del componente')
  }
  constructor() { }

  ngOnInit(): void {
  }

}
