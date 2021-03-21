import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngtemplate',
  templateUrl: './ngtemplate.component.html',
  styleUrls: ['./ngtemplate.component.css']
})
export class NgtemplateComponent implements OnInit {

  mostrar: boolean;
  mostrar2:boolean;

  constructor() {
    this.mostrar=false;
    this.mostrar2=false;
  }

  ngOnInit(): void {
  }

  onClickMostrar(){
    this.mostrar = !this.mostrar;
  }
  onClickMostrar2(){
    this.mostrar2 = !this.mostrar2;
  }

}
