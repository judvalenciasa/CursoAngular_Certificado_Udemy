import { Component, Input, OnInit } from '@angular/core';
import { Tarea } from 'src/app/video58/models/tarea.models';

@Component({
  selector: 'app-lista-to-do',
  templateUrl: './lista-to-do.component.html',
  styleUrls: ['./lista-to-do.component.css']
})
export class ListaToDoComponent implements OnInit {

  @Input() tareas: Tarea[];
  constructor() { }

  ngOnInit(): void {
    
  }

  onClick(pTarea: Tarea){
    pTarea.completa = !pTarea.completa;
  }

  borrar(indice){
    this.tareas.splice(indice, 1);
  }
}
