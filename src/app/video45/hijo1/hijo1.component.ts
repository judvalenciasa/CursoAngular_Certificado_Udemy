import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-hijo1',
  templateUrl: './hijo1.component.html',
  styleUrls: ['./hijo1.component.css']
})
export class Hijo1Component implements OnInit {

  @Input() texto:string;

  constructor() {
    console.log("estoy en el constructor");
    console.log("se inicializan cosas");
    console.log(`TEXTO: ${this.texto}`);
  }

  ngOnInit(): void {
    console.log("estoy en el ngOnInit");
    console.log("acciones cuando arranque el componente");
    console.log(`TEXTO: ${this.texto}`);
  }

  ngOnChanges(changes: SimpleChange){
    console.log("estoy en el ngOnChanges");
    console.log("acciones cuando arranque el componente");
    console.log(`TEXTO: ${this.texto}`);
    console.log(`Valor anterior: ${changes['texto'].previousValue}. Valor actual: ${changes['texto'].currentValue}`);
  }

  ngAfterViewInit(){
    console.log("estoy rn el ngAfterViewInit");
    console.log("acciones iniciales dentro de una plantilla");
  }

  

}
