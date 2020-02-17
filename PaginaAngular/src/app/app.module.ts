import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorld } from './primercomponente/primer.component';
import { SegundoComponent } from './segundo/segundo.component';
import { TercerComponenteComponent } from './tercer-componente/tercer-componente.component';
import { UserComponent } from './user/user.component';
import { EventosComponent } from './eventos/eventos.component';
import {RouterModule,Route} from '@angular/router'

const routes:Route[]=[
  {path:'',component:HelloWorld},
  {path:'Segundo',component:SegundoComponent},
  {path:'Tercer',component:TercerComponenteComponent},
  {path:'Karen',component:UserComponent},
  {path:'Evento',component:EventosComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    HelloWorld,
    SegundoComponent,
    TercerComponenteComponent,
    UserComponent,
    EventosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
