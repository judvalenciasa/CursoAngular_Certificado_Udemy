import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-captacion-datos',
  templateUrl: './event-captacion-datos.component.html',
  styleUrls: ['./event-captacion-datos.component.css']
})
export class EventCaptacionDatosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

onClick(){
  alert("hola");
}

}
