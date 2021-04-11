import { Component, OnInit } from '@angular/core';
import { Persona } from '../Modelos/personas';
import { PersonasService } from '../servicios/personas.service';

@Component({
  selector: 'app-home-servicio',
  templateUrl: './home-servicio.component.html',
  styleUrls: ['./home-servicio.component.css']
})
export class HomeServicioComponent implements OnInit {

  arrPersonas: Persona[];
  constructor(private PersonasService: PersonasService) { }

  ngOnInit(): void {
    this.arrPersonas = this.PersonasService.getAll();
  }

}
