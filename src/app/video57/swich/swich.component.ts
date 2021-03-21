import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swich',
  templateUrl: './swich.component.html',
  styleUrls: ['./swich.component.css']
})
export class SwichComponent implements OnInit {

  opcionString: String;
  opcionNumero: number;
  constructor() { 
    this.opcionNumero = 2;
    this.opcionString = 'uno';
  }

  ngOnInit(): void {
  }

}
