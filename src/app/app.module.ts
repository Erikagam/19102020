import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {LayoutComponent} from './layout/layout.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes//header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import {Pagina2Component } from './componentes/pagina2/pagina2.component'
import {Pagina1Module} from './componentes/pagina1/pagina1.module'

import { from } from 'rxjs';
@NgModule({
  declarations: [AppComponent,
  HeaderComponent,
  FooterComponent,
  Pagina2Component,
  LayoutComponent
],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,HeaderComponent,FooterComponent,Pagina2Component]
})
export class AppModule { }
