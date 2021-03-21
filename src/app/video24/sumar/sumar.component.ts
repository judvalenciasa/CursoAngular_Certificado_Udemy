import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sumar',
  templateUrl: './sumar.component.html',
  styleUrls: ['./sumar.component.css']
})
export class SumarComponent {

  num1:number;
  num2:number;
  res:number;

  constructor() { 
    this.num1=78;
    this.num2=3;
  }


  sumar():void{
    this.res=this.num1+this.num2;
  }

}
