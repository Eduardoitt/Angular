// importo un componente del nucleo de angular
import {Component} from '@angular/core';

//la clase la comvierto en un componente
@Component({
    //le doy nombre a la etiqueta(componente)
    selector:'HelloWorld',
    templateUrl: './primer.component.html',
    styleUrls:['./primer.component.css']
})
//export es para utilizar el componente donde sea
export class HelloWorld{
    mensaje='mensaje desde ts'
}