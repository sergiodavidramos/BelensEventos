import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { RouterModule } from '@angular/router';
import { SalonesComponent } from './pages/salones/salones.component';
import { PaquetesComponent } from './pages/paquetes/paquetes.component';
import { PromocionesComponent } from './pages/promociones/promociones.component';
import { MobiliarioComponent } from './pages/mobiliario/mobiliario.component';
import { CateringComponent } from './pages/catering/catering.component';
import { BarComponent } from './pages/bar/bar.component';
import { ComedoresComponent } from './pages/comedores/comedores.component';
import { UsuarioService } from './services/usuario.service';

import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PipesModule } from './pipes/pipes.module';
import { CarritoComponent } from './pages/carrito/carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PrincipalComponent,
    SalonesComponent,
    PaquetesComponent,
    PromocionesComponent,
    MobiliarioComponent,
    CateringComponent,
    BarComponent,
    ComedoresComponent,
    CarritoComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    RouterModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    PipesModule
    
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
