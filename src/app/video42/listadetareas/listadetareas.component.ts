import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listadetareas',
  templateUrl: './listadetareas.component.html',
  styleUrls: ['./listadetareas.component.css']
})
export class ListadetareasComponent implements OnInit {

  @Output() tarea:EventEmitter<{}>;
  titulo:string;
  descripcion:string;
  
  
  constructor() { 
    this.titulo='';
    this.descripcion='';
    this.tarea= new EventEmitter();
  }

  ngOnInit(): void {

  }

  onClick(){
    let tarea = {titulo:this.titulo,descripcion:this.descripcion};
    this.tarea.emit(tarea);
  }


}
