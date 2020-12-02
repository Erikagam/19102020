
import { from } from 'rxjs';
import {Pagina1Component} from './pagina1.component'
import {Routes, RouterModule} from '@angular/router'
import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
const routes: Routes = [ 
    {
        path: '', component: Pagina1Component
    }
]
@NgModule({
    imports:[RouterModule.forChild( routes )],
    exports:[
        RouterModule
    ]

})
export class Pagina1RoutingModule {}