import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Eduardo';
  NombreP:string;
  Edad:number;
  carrera:string;
  gustos:{
    novia:string;
    carro:string[];
  }
  constructor(){
    this.NombreP='Eduardo';
    this.Edad=23;
    this.carrera='Sistemas';
    this.gustos={
      novia:'Karen',
      carro:['Subaru','Charger']
    };

  }
}
