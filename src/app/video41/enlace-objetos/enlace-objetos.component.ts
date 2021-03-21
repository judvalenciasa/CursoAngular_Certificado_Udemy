import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enlace-objetos',
  templateUrl: './enlace-objetos.component.html',
  styleUrls: ['./enlace-objetos.component.css']
})
export class EnlaceObjetosComponent implements OnInit {
  persona:any;
  
  constructor() { 
    this.persona={ nombre:'Juanito', apellidos:'Perez', edad:18};
  }

  

  ngOnInit(): void {
  }

}
