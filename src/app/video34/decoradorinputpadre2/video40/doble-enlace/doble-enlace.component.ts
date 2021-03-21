import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doble-enlace',
  templateUrl: './doble-enlace.component.html',
  styleUrls: ['./doble-enlace.component.css']
})
export class DobleEnlaceComponent implements OnInit {
  campoTexto:string;
  constructor() {
    this.campoTexto='valor inicial';
   }

  ngOnInit(): void {
  }

  onClick(){
    this.campoTexto='Valor desde el boton';
  }

}
