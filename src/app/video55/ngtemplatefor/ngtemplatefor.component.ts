import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngtemplatefor',
  templateUrl: './ngtemplatefor.component.html',
  styleUrls: ['./ngtemplatefor.component.css']
})
export class NgtemplateforComponent implements OnInit {

  personas:any[];
  constructor() { 
    this.personas=[
      {nombre:'Mario',apellidos:'giron', edad:1},
      {nombre:'Rosa',apellidos:'caicedo', edad:2},
      {nombre:'Rosio',apellidos:'perez', edad:3},
      {nombre:'Manuel',apellidos:'soto', edad:5},
      {nombre:'Mario',apellidos:'sian', edad:8},
    ];
  }

  ngOnInit(): void {
  }

}
