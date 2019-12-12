import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
// import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { PrincipalComponent } from './pages/principal/principal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    // APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
