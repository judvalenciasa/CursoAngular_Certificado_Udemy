import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Tarea } from 'src/app/video58/models/tarea.models';

@Component({
  selector: 'app-formulario-to-do',
  templateUrl: './formulario-to-do.component.html',
  styleUrls: ['./formulario-to-do.component.css']
})
export class FormularioToDOComponent implements OnInit {

  @Output() tareaCreada: EventEmitter<Tarea>;

  nuevaTarea:Tarea;
  constructor() { 
    this.nuevaTarea=new Tarea();
    this.tareaCreada = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick(){
    this.tareaCreada.emit(this.nuevaTarea);
    this.nuevaTarea = new Tarea();
  }

}
