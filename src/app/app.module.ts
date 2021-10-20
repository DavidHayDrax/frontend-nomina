import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProcesarventaComponent } from './pages/procesarventa/procesarventa.component';
import { GestionarcontratoComponent } from './pages/gestionarcontrato/gestionarcontrato.component';

@NgModule({
  declarations: [
    AppComponent,
    ProcesarventaComponent,
    GestionarcontratoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
