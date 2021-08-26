import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { Ejercitacion1Component } from './componentes/ejercitacion1/ejercitacion1.component';
import { ErrorComponent } from './componentes/error/error.component';
import { LoginComponent } from './componentes/login/login.component';

const routes:Routes  = [
  {path:'',component:Ejercitacion1Component},
  {path:'login',component:LoginComponent},
  {path:'bienvenido',component:BienvenidoComponent},  
  {path:'ejercitacion1',component:Ejercitacion1Component},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
