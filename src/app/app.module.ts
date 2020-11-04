import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes//header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { Pagina1Component } from './componentes/pagina1/pagina1.component';
import { InfoaseguradoComponent } from './componentes/pagina1/infoasegurado/infoasegurado.component';
import {InfovehiculoComponent} from './componentes/pagina1/infovehiculo/infovehiculo.component';
import {Pagina2Component } from './componentes/pagina2/pagina2.component'
@NgModule({
  declarations: [AppComponent,
  HeaderComponent,
  FooterComponent,
  Pagina1Component,
  InfoaseguradoComponent,
  InfovehiculoComponent,
  Pagina2Component
],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,HeaderComponent,FooterComponent,InfovehiculoComponent,InfoaseguradoComponent,Pagina1Component,Pagina2Component]
})
export class AppModule { }
