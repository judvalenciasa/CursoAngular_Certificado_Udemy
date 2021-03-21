import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/video43/tarea';


@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  arrayTarea:Tarea[];
  constructor() {
    this.arrayTarea = [];
   }

  ngOnInit(): void {
  }

  onTareaCreada($event){
    this.arrayTarea.push($event);
  }
}
