import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolacionvariables',
  templateUrl: './interpolacionvariables.component.html',
  styleUrls: ['./interpolacionvariables.component.css']
})
export class InterpolacionvariablesComponent implements OnInit {

  mensaje:string;
  identiParrafo:string;

  constructor() { 

    this.mensaje='un saludo a todos';
    this.identiParrafo='parrafoPrincipal';

    setTimeout(() => {
      this.mensaje = 'adios!';
      this.identiParrafo = 'main';
    }, 3000);

  }

  ngOnInit(): void {
  }

  mostrarSaludo():string{
    return 'saludo desde el metodo';
  }
}
