import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionarcontratoComponent } from './pages/gestionarcontrato/gestionarcontrato.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProcesarventaComponent } from './pages/procesarnomina/procesarnomina.component';

const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'procesarventa', component: ProcesarventaComponent},
  {path: 'gestionarcontrato', component: GestionarcontratoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
