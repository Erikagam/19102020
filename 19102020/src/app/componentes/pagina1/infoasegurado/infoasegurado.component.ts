import { Component, OnInit } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http'


@Component({
  selector: 'app-infoasegurado',
  templateUrl: './infoasegurado.component.html',
  styleUrls: ['./infoasegurado.component.css']
})
export class InfoaseguradoComponent implements OnInit {
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
  // valores para código postal
  readonly api: string ="https://apitestcotizamatico.azurewebsites.net/api/catalogos";
  ubicacion: any;
  codigoPostal;
  ubicacionId: number;
  estado: string;
  municipio: string;
  colonia: string;
  bisiesto: boolean;
  // Valores selección fecha
  dias;
  meses;
  fechaannos;
  mesdiabis: (string | number)[][];
  mesdia: (string | number)[][];
  mes: string  = ''; // Iniciamos mes 
  vermes: string        = '';
  fechaann: string  = ''; // Iniciamos fechaann 
  verfechaann: string        = '';
  dia: string  = ''; // Iniciamos dia
  // console.log(this.mesdiabis[0][1])//DIAS
  // console.log(this.mesdiabis[0][0])//MESES
  verdia: string        = '';
  selectedmes;
  selectedyear;
  selecteddia;
  selected;
  //Valores botones soy
  soymujer=false;
  soyhombre=false;
  soyempresa=false;
  statussoymujer = "NoSelected";
  statussoyhombre= "NoSelected";
  statussoyempresa= "NoSelected";
  constructor(private http:HttpClient){
  }
   
//Funciones botones SOY
  Soymujer() {
    // tiene selected this.statussoymujer
    this.soymujer = !this. soymujer;
    this.statussoymujer = this. soymujer ? "Selected"  :"NoSelected";
    console.log("Mujer"+' '+this.soymujer+' '+this.statussoymujer)
  }
  Soyhombre( ) {
    // tiene selected this.statusDM
    this. soyhombre = !this. soyhombre;
    this.statussoyhombre= this. soyhombre ? "Selected" : "NoSelected";
    console.log("Hombre"+' '+this.soyhombre+' '+this.statussoyhombre)
  }
  Soyempresa( ) {
    // tiene selected this.statusDB
    this. soyempresa = !this. soyempresa;
    this.statussoyempresa= this. soyempresa ? "Selected" : "NoSelected" ;
    console.log("Empresa"+' '+this.soyempresa+' '+this.statussoyempresa)
  }
  // Funciones con DD
  // capturarmes(evento) {
  //   // ng-model="selectedItem" ng-options="item as item.name for item in items"
  //   this.dias=[]
  //   this.verdia=""
  //   this.dia=""
  //   document.getElementById("btndia").textContent = "Día";
  //   // console.log(evento.target.textContent)
  //   console.log(this.selected[0])
  //   this.vermes=evento.target.textContent
  //   this.vermes=this.vermes.replace(/ /g,"")
  //   this.mes=evento.target.value
  //   document.getElementById("btnmes").textContent = this.vermes;
  //   this.calculabis()
  // }
  // capturarfechaann(evento) {
  //   // console.log(evento.target.textContent)
  //   //siguientes 3 lineas limpian la seleccion anterior
  //   this.dias=[]
  //   this.verdia=""
  //   this.dia=""
  //   document.getElementById("btndia").textContent = "Día";
  //   this.verfechaann=evento.target.textContent
  //   this.verfechaann=this.verfechaann.replace(/ /g,"")
  //   this.fechaann=evento.target.value
  //   document.getElementById("btnnacann").textContent = this.verfechaann;
  //   this.calculabis()
  //   }
  // capturardia(evento) {
  //   this.verdia=evento.target.textContent
  //   this.verdia=this.verdia.replace(/ /g,"")
  //   this.dia=evento.target.value
  //   document.getElementById("btndia").textContent = this.verdia;
  // }
  
  //Funciones selección fecha de nacimiento
  getmes(){
     // Siguientes 3 lineas limpian días
     this.selecteddia=''
     this.dias=[]
     this.verdia=""
     this.dia=""
    console.log(this.selectedmes)
    this.vermes=this.selectedmes
    this.calculabis()
  }
  getanno(){
    // Siguientes 3 lineas limpian días
    this.selecteddia=''
    this.dias=[]
    this.verdia=""
    this.dia=""
    console.log(this.selectedyear)
    this.verfechaann=this.selectedyear
    this.calculabis() 
  }
  getdia(){
    console.log(this.selecteddia)
  }
  
//Función para determinar tipo de año (bisiesto/ no bisiesto)
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
//Función codigo postal
  onCodigoPostalKeyUp(event) {
    console.log(event);
    if (this.codigoPostal.length < 5) {
      console.log('No se puede validar un CP menor a 5 caracteres');
      return;
    }
    this.http.post(this.api, {
      "IdAplication": "2", 
      "NombreCatalogo": "Sepomex", 
      "Filtro": this.codigoPostal
    }).subscribe((data: any)=> {
      // console.log(data.CatalogoJsonString)
      this.ubicacion = JSON.parse(data.CatalogoJsonString);
      this.estado = this.ubicacion[0].Municipio.Estado.sEstado;
      this.municipio = this.ubicacion[0].Municipio.sMunicipio;
      this.colonia = this.ubicacion[0].Ubicacion[0].sUbicacion;
      this.ubicacionId = this.ubicacion[0].Ubicacion[0].iIdUbicacion;
      console.log(this.estado+'  '+ this.municipio +'  '+ this.colonia+'  '+ this.ubicacionId)
      })
  }

 
  }

  
  

  


