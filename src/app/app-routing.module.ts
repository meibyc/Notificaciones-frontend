import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DerechosPublicComponent } from './derechos-public/derechos-public.component';
import { ComparendosPublicComponent } from './comparendos-public/comparendos-public.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { DerechosComponent } from './derechos/derechos.component';
import { ComparendosComponent } from './comparendos/comparendos.component';
import { PersonasComponent } from './personas/personas.component';
import {AdministradorComponent} from './administrador/administrador.component';
const routes: Routes = [
  { path: 'InicioComponent', component: InicioComponent },
  { path: '', component: InicioComponent },

  { path: 'DerechosPublicComponent', component: DerechosPublicComponent },
  { path: 'ComparendosPublicComponent', component: ComparendosPublicComponent },
  { path: 'LoginComponent', component: LoginComponent },
  { path: 'DerechosComponent', component: DerechosComponent },
  { path: 'ComparendosComponent', component: ComparendosComponent },
  { path: 'PersonasComponent', component: PersonasComponent },
  { path: 'AdministradorComponent', component: AdministradorComponent },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
