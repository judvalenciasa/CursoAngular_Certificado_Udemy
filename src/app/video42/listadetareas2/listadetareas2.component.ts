import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listadetareas2',
  templateUrl: './listadetareas2.component.html',
  styleUrls: ['./listadetareas2.component.css']
})
export class Listadetareas2Component implements OnInit {

  @Input() tareas:[];
 
  constructor() { 
    this.tareas=[];
  }

  ngOnInit(): void {
  }

  

}
