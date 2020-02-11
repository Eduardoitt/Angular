import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorld } from './primercomponente/primer.component';
import { SegundoComponent } from './segundo/segundo.component';
import { TercerComponenteComponent } from './tercer-componente/tercer-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorld,
    SegundoComponent,
    TercerComponenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
