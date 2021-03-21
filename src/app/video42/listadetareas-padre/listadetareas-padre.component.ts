import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listadetareas-padre',
  templateUrl: './listadetareas-padre.component.html',
  styleUrls: ['./listadetareas-padre.component.css']
})
export class ListadetareasPadreComponent implements OnInit {

  listaTareas:any=[];

  constructor() { }

  ngOnInit(): void {
  }


  onGuardarTarea($event){
    this.listaTareas.push($event);
  }
  

}
