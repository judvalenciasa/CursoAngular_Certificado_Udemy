import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cronometro-padre',
  templateUrl: './cronometro-padre.component.html',
  styleUrls: ['./cronometro-padre.component.css']
})
export class CronometroPadreComponent implements OnInit {
  numeros:number[];
  
  constructor() { 
    this.numeros=[1,43,8,27];
  }

  ngOnInit(): void {
  }
  
  onTerminarCronometro($event){
    alert($event);
  }

}
