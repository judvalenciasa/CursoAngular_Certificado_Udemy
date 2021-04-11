import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/video79/Modelos/personas';
import { ListaSigletonService } from '../servicios/lista-sigleton.service';

@Component({
  selector: 'app-lista-sigleton',
  templateUrl: './lista-sigleton.component.html',
  styleUrls: ['./lista-sigleton.component.css']
})
export class ListaSigletonComponent implements OnInit {

  arrPersonas:Persona[];
  constructor(private personasService:ListaSigletonService) { }

  ngOnInit(): void {
    this.arrPersonas = this.personasService.getAll();
  }

}
