import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-decoradorinput',
  templateUrl: './decoradorinput.component.html',
  styleUrls: ['./decoradorinput.component.css']
})
export class DecoradorinputComponent implements OnInit {

  @Input('texto')mensaje:string;
  @Input()subtitulo:string;

  constructor() { 
    this.mensaje = 'Mensaje de alerta por defecto';
    this.subtitulo='subtitulo por defecto';
  }

  ngOnInit(): void {
  }

}
