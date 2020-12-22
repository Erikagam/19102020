import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
//  para añadir script import * as $ from 'jquery'; 
import {Response} from './interphaces/response'


@Component({
  selector: 'app-infovehiculo',
  templateUrl: './infovehiculo.component.html',
  styleUrls: ['./infovehiculo.component.css']
})
export class InfovehiculoComponent implements OnInit {
  annos: {sLlave: string; sDato: string; }[];
  modelos: { sLlave: number; sDato: string; }[];

  modelo: string  = '0'; // Iniciamos
  vermodelo: string        = '';
  seleccionaModelo(evento){
    console.log(evento.target.textContent+'   '+evento.target.attributes[3].value )
    this.modelo=evento.target.attributes[3].value
    this.vermodelo=evento.target.textContent
    document.getElementById("btnmodelo").textContent = this.vermodelo;
        this.http.post(this.api, {
          "iTipoCatalogo": "20",
          "iModelo": "00",
          "iMarca": "0",
          "iSubramo": this.modelo,
          "sDescripcion": ""
        }).subscribe((data: any)=> {
          console.log(data.catalogos)
          this.annos=data.catalogos
      
            })
}
  anno: string  = '0'; // Iniciamos
  veranno: string        = '';
  seleccionaAnn(evento){
    console.log(evento.target.textContent + '  ' +evento.target.attributes[3].value)
    this.anno=evento.target.attributes[3].value
    this.veranno=evento.target.textContent
    document.getElementById("btnyear").textContent = this.veranno;
    this.http.post(this.api, {
      "iTipoCatalogo": "30",
      "iModelo": "00",
      "iMarca": "0",
      "iSubramo": this.anno,
      "sDescripcion": ""
    }).subscribe((data: any)=> {
      console.log(data.catalogos)
      
        })



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

  as: Response
  readonly api: string ="https://apitestcotizamatico.azurewebsites.net/api/catalogoCotizamaticoBr";
 
  constructor(private http:HttpClient){
      }
      
  getmodels(){
    this.http.post(this.api, {
      "iTipoCatalogo": "10",
      "iModelo": "00",
      "iMarca": "0",
      "iSubramo": "00",
      "sDescripcion": ""
    }).subscribe((data: any)=> {
console.log(data.catalogos)
this.modelos=data.catalogos
          
// este es codigo anterior *por si vuelve a lo antiguo xD
    //   let x: Response = data
    //   let y= JSON.parse(x.CatalogoJsonString)
    //   let marcs= Object.values(y)
    //   let c: Array<any>=[]
    //   marcs.map(value => {
    //     c.push(value)
    //   })
    //   let limpio: Response={
    //     CatalogoJsonString: c,
    //     Error: null
    //   }
    //   this.as=limpio
    // console.log(limpio)
    //   return limpio
    })
  }


  ngOnInit(): void {
    this.getmodels()
    
   
  }

  

}
