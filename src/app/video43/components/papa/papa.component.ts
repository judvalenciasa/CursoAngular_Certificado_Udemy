import { Component, OnInit } from '@angular/core';
import { Tarea } from '../../tarea';

@Component({
  selector: 'app-papa',
  templateUrl: './papa.component.html',
  styleUrls: ['./papa.component.css']
})
export class PapaComponent{

  arregloTareas:Tarea[];
  constructor() { 
    this.arregloTareas=[];
  }

  onTareaCreada($event){
    this.arregloTareas.push($event);
  }
}
