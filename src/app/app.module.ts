import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { InicioComponent } from './inicio/inicio.component';
import { DerechosPublicComponent } from './derechos-public/derechos-public.component';
import { ComparendosPublicComponent } from './comparendos-public/comparendos-public.component';
import { LoginComponent } from './login/login.component';
import { DerechosComponent } from './derechos/derechos.component';
import { ComparendosComponent } from './comparendos/comparendos.component';
import { PersonasComponent } from './personas/personas.component';
import { AdministradorComponent } from './administrador/administrador.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    DerechosPublicComponent,
    ComparendosPublicComponent,
    LoginComponent,
    DerechosComponent,
    ComparendosComponent,
    PersonasComponent,
    AdministradorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
