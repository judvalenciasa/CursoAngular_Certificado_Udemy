import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cronometro-hijo',
  templateUrl: './cronometro-hijo.component.html',
  styleUrls: ['./cronometro-hijo.component.css']
})
export class CronometroHijoComponent implements OnInit {

  @Input() inicio:number;
  contador:number;
  @Output() terminarCronometro:EventEmitter<string>;
  
  constructor() { 
    this.contador=10;
    this.terminarCronometro= new EventEmitter();
  }

  ngOnInit(): void{
    this.contador = this.inicio? this.inicio:10;
  }

  onClick(){
    let intervalo = setInterval(()=> { 
      this.contador--;
      if(this.contador < 0){
        clearInterval(intervalo);
        this.contador=this.inicio;
        this.terminarCronometro.emit('Finaliza el cronometro con el numero'+ this.inicio)
      }
    }, 1000);
  }

}
