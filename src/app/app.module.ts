import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< Updated upstream

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
=======
import { HeaderComponent } from './componentes//header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { Pagina1Component } from './componentes/pagina1/pagina1.component';
import { InfoaseguradoComponent } from './componentes/pagina1/infoasegurado/infoasegurado.component';
import { InfovehiculoComponent } from './componentes/pagina1/infovehiculo/infovehiculo.component';
import { Pagina2Component } from './componentes/pagina2/pagina2.component';
import { LayoutComponent } from './layout/layout.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Pagina1Component,
    InfoaseguradoComponent,
    InfovehiculoComponent,
    Pagina2Component,
    LayoutComponent,
>>>>>>> Stashed changes
  ],
  imports: [FormsModule, BrowserModule, AppRoutingModule],
  providers: [],
<<<<<<< Updated upstream
  bootstrap: [AppComponent]
=======
  bootstrap: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InfovehiculoComponent,
    InfoaseguradoComponent,
    Pagina1Component,
    Pagina2Component,
  ],
>>>>>>> Stashed changes
})
export class AppModule {}
