import { Injectable } from '@angular/core';
import { Persona } from '../Modelos/personas';


@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  personas:Persona[];
  
  constructor() { 
    this.personas = [
    new Persona('Juan David', 'Valencia Salgado', 25, true),
    new Persona('Jairo', 'Valencia Bañol', 50, false),
    new Persona('Sebastian', 'Valencia castañeda', 16, true),
    ];
  }

getAll(){
  return this.personas;
}

}
