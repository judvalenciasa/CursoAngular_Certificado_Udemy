import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  mainTexto:string;

  constructor() { 
    this.mainTexto='Texto desde el padre';
  }

  ngOnInit() {
    let cont = 0;
    setInterval(() => {
      this.mainTexto = `Texto ${cont++}`;
    }, 2000);
  }

}
