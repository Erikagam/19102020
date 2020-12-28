import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
//  para añadir script import * as $ from 'jquery'; 


@Component({
  selector: 'app-infovehiculo',
  templateUrl: './infovehiculo.component.html',
  styleUrls: ['./infovehiculo.component.css']
})
export class InfovehiculoComponent implements OnInit {
  readonly api: string ="https://apitestcotizamatico.azurewebsites.net/api/catalogoCotizamaticoBr";
  constructor(private http:HttpClient){
  }
  
  annos: {sLlave: string; sDato: string; }[];
  modelos: { sLlave: number; sDato: string; }[];
  marcas: { sLlave: number; sDato: string; }[];
  descripciones: { sLlave: number; sDato: string; }[];
  modelosel;
  annosel;
  marcasel;
  descripsel;
  item:string='';
  
  
  modelo: string  = '0'; // Iniciamos
  vermodelo: string        = '';
  anno: string  = '0'; // Iniciamos
  veranno: string        = '';
  marca: string  = '0'; // Iniciamos
  vermarca: string        = '';
  descripcion: string  = '0'; // Iniciamos
  verdescripcion: string       = '';
  //DD
  //   seleccionaModelo(evento){
    //     //siguientes 12 lineas limpian la seleccion anterior
//     this.annos=[]
//     this.marcas=[]
//     this.descripciones=[]
//     this.anno=""
//     this.veranno=""
//     document.getElementById("btnyear").textContent = "Año";
//     this.marca=""
//     this.vermarca=""
//     document.getElementById("btnmarca").textContent = "Marca";
//     this.descripcion=""
//     this.verdescripcion=""
//     document.getElementById("btndescr").textContent = "Descripción";
//     console.log(evento.target.textContent+'   '+evento.target.attributes[3].value )
//     this.modelo=evento.target.attributes[3].value
//     this.vermodelo=evento.target.textContent
//     document.getElementById("btnmodelo").textContent = this.vermodelo;
//         this.http.post(this.api, {
//           "iTipoCatalogo": "20",
//           "iModelo": "00",
//           "iMarca": "0",
//           "iSubramo": this.modelo,
//           "sDescripcion": ""
//         }).subscribe((data: any)=> {
//           console.log(data.catalogos)
//           this.annos=data.catalogos
//         })
// }
  // seleccionaAnn(evento){
  //       //siguientes 8 lineas limpian la seleccion anterior
  //       this.marcas=[]
  //       this.descripciones=[]
  //       this.marca=""
  //       this.vermarca=""
  //       document.getElementById("btnmarca").textContent = "Marca";
  //       this.descripcion=""
  //       this.verdescripcion=""
  //       document.getElementById("btndescr").textContent = "Descripción";
  //   console.log(evento.target.textContent + '  ' +evento.target.attributes[3].value)
  //   this.anno=evento.target.attributes[3].value
  //   this.veranno=evento.target.textContent
  //   document.getElementById("btnyear").textContent = this.veranno;
  //   this.http.post(this.api, {
  //     "iTipoCatalogo": "30",
  //     "iModelo": this.anno,
  //     "iMarca": "0",
  //     "iSubramo": this.modelo,
  //     "sDescripcion": ""
  //   }).subscribe((data: any)=> {
  //     console.log(data.catalogos)
  //     this.marcas=data.catalogos
  //     })
  // }
  // seleccionaMarca(evento){
  //   //siguientes 5 lineas limpian la seleccion anterior
  //   this.descripciones=[]
  //   this.descripcion=""
  //   this.verdescripcion=""
  //   document.getElementById("btndescr").textContent = "Descripción";
  //   console.log(evento.target.textContent+'  '+evento.target.attributes[3].value)
  //   this.marca=evento.target.attributes[3].value
  //   this.vermarca=evento.target.textContent
  //   document.getElementById("btnmarca").textContent = this.vermarca;
  //   this.http.post(this.api, {
  //     "iTipoCatalogo": "40",
  //     "iModelo": this.anno,
  //     "iMarca": this.marca,
  //     "iSubramo": this.modelo,
  //     "sDescripcion": ""
  //   }).subscribe((data: any)=> {
  //     console.log(data.catalogos)
  //     this.descripciones=data.catalogos
  //     })
  // }
  // seleccionaDescip(evento){
  //   console.log(evento.target.textContent+'    '+evento.target.attributes[3].value)
  //   this.descripcion=evento.target.attributes[3].value
  //   this.verdescripcion=evento.target.textContent
  //   document.getElementById("btndescr").textContent = this.verdescripcion;
  // }
  
  getModelo() {
      // Limpia los select restantes
      this.annos=[]
      this.annosel=''
      this.veranno=''
      this.anno=''
      this.marcas=[]
      this.marcasel=''
      this.vermarca=''
      this.marca=''
      this.descripciones=[]
      this.descripsel=''
      this.verdescripcion=''
      this.descripcion=''
      // Muestra modelo Seleccinonado
      console.log(this.modelosel.sDato+'  '+this.modelosel.sLlave)
      this.modelo=this.modelosel.sLlave
      this.vermodelo= this.modelosel.sDato
      //API
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
  getAnno() {
    // Limpia los select restantes
    this.marcas=[]
    this.marcasel=''
    this.vermarca=''
    this.marca=''
    this.descripciones=[]
    this.descripsel=''
    this.verdescripcion=''
    this.descripcion=''
    // Muestra año Seleccinonado
    console.log(this.annosel.sDato+'  '+this.annosel.sLlave)
    this.anno=this.annosel.sLlave
    this.veranno= this.annosel.sDato
    //API
    this.http.post(this.api, {
        "iTipoCatalogo": "30",
        "iModelo": this.anno,
        "iMarca": "0",
        "iSubramo": this.modelo,
        "sDescripcion": ""
      }).subscribe((data: any)=> {
        console.log(data.catalogos)
        this.marcas=data.catalogos
        })
  
  }
  getMarca(){
    // Limpia los select restantes
    this.descripciones=[]
    this.descripsel=''
    this.verdescripcion=''
    this.descripcion=''
    // Muestra marca seleccionada
    console.log(this.marcasel.sDato+'  '+this.marcasel.sLlave)
    this.marca=this.marcasel.sLlave
    this.vermarca= this.marcasel.sDato
    // API
    this.http.post(this.api, {
      "iTipoCatalogo": "40",
      "iModelo": this.anno,
      "iMarca": this.marca,
      "iSubramo": this.modelo,
      "sDescripcion": ""
    }).subscribe((data: any)=> {
      console.log(data.catalogos)
      this.descripciones=data.catalogos
      })
  }
  getDescripcion(){
    // Muestra marca seleccionada
    console.log(this.descripsel.sDato+'  '+this.descripsel.sLlave)
    this.descripcion=this.descripsel.sLlave
    this.verdescripcion= this.descripsel.sDato
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
