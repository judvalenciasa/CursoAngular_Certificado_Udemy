import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre-directiva',
  templateUrl: './padre-directiva.component.html',
  styleUrls: ['./padre-directiva.component.css']
})
export class PadreDirectivaComponent implements OnInit {
  propiedadesParrafo:any;
  constructor() { 
    this.propiedadesParrafo={ color: 'red', fontSize:'24px' };
  }
  
  cambiarColor(pColor:string){
    switch (pColor) {
      case 'a':
        this.propiedadesParrafo.color = 'yellow';
        break;
      
        case 'r':
          this.propiedadesParrafo.color = 'red';
          break;
    
        case 'v':
          this.propiedadesParrafo.color = 'green';
          break;
      default:
        break;
    }
  }

  onInput($event){
    this.propiedadesParrafo.fontSize= `${$event.target.value}px`;
  }

  ngOnInit(): void {
  }

}
