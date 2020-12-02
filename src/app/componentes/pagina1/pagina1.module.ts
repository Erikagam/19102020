import { NgModule } from '@angular/core';
import { from } from 'rxjs';
import {InfoaseguradoComponent} from './infoasegurado/infoasegurado.component'
import {InfovehiculoComponent} from './infovehiculo/infovehiculo.component'
import {Pagina1Component} from './pagina1.component'
import { CommonModule } from '@angular/common' 
import { Pagina1RoutingModule } from './pagina1-routing.module';
@NgModule({
    imports:[CommonModule, Pagina1RoutingModule],
    providers:[],
    declarations:[
        InfovehiculoComponent,
        InfoaseguradoComponent, 
        Pagina1Component
    ],
    bootstrap:[
        Pagina1Component,
        InfovehiculoComponent,
        InfoaseguradoComponent,
    ]
})

export class Pagina1Module{}