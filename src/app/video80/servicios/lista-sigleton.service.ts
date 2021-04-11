import { Injectable } from '@angular/core';
import { Persona } from '../modelos/personas';

@Injectable()
export class ListaSigletonService {

  personas: Persona[];

  constructor() {
    this.personas = [
      new Persona('Juan David', 'Valencia Salgado', 25, true),
      new Persona('Jairo', 'Valencia Bañol', 50, false),
      new Persona('Sebastian', 'Valencia castañeda', 16, true),
    ];
  }

  getAll() {
    return this.personas;
  }

  create(personaNueva: Persona) {
    this.personas.push(personaNueva);
  }

  activos(): Promise<Persona[]> {
    const promesa = new Promise<Persona[]>((resolve, reject) => {
      const arrTemp: Persona[] = [];
      for (let persona of this.personas) {
        if (persona.activo) {
          arrTemp.push(persona);
        }
      }
      resolve(arrTemp);
    });
    return promesa;
  }

  activosVerion2(): Promise<Persona[]> {
    return new Promise((resolve, reject) => {
      const arrTemp = this.personas.filter(persona => {
        return persona.activo;
      });
      resolve(arrTemp);
    });

    //Una estructura mas comprimida seria 
    //return new Promise((resolve, reject)=>{
    //  resolve(this.personas.filter(persona=> persona.activo));
    //});

  }




}
