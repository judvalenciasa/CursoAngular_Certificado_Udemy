import { Component, Input, OnInit } from '@angular/core';
import { Tarea } from '../../tarea';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() tareas:Tarea[];
  constructor() { }

  ngOnInit(): void {
  }

  mostrarTareas(){
    let resultado='<ul>';

    for(let tarea of this.tareas){
      resultado += `<li>${tarea.titulo} - ${tarea.descripcion} </li>`;
    }
    resultado += '</ul>';
    return resultado;
  }

}
