import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventmouse',
  templateUrl: './eventmouse.component.html',
  styleUrls: ['./eventmouse.component.css']
})
export class EventmouseComponent implements OnInit {

  mensaje:string;
  constructor() {
    this.mensaje='este es el mensaje inicial';
   }

  ngOnInit(): void {
  }

  onClick($event){
    console.log($event);
  }

  onChange($event){
    console.log("propiedad numero "+ $event.target.value);
  }

  onMouseEnter(){
    this.mensaje='Estoy dentro del dif';
  }

  mouseOut(){
    this.mensaje='Estoy FUERA del dif';
  }

  onChangeInput($event){
    console.log($event.target.value);
  }

  onInput($event){
    console.log($event.target.value);
    this.mensaje = $event.target.value;
  }

  onFocus(){
    console.log("gana el foco");
  }
  onBlur(){
    console.log("pierde el foco");
  }
}
