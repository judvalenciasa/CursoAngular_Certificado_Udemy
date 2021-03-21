import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-decoradorr-outputhijo',
  templateUrl: './decoradorr-outputhijo.component.html',
  styleUrls: ['./decoradorr-outputhijo.component.css']
})
export class DecoradorrOutputhijoComponent implements OnInit {

  @Output() alertaPulsada: EventEmitter<string>;

  constructor() { 
    this.alertaPulsada= new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClic(){
    this.alertaPulsada.emit('La alerta ha sido pulsada');
  }

}
