import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-papa-rutas',
  templateUrl: './papa-rutas.component.html',
  styleUrls: ['./papa-rutas.component.css']
})
export class PapaRutasComponent implements OnInit {

  constructor(private router:Router) {
    
   }

  ngOnInit(): void {
  }

  onClinck(ruta:string){
    //se realizan tareas previas
    console.log("se realizan tareas previas");
    this.router.navigate([ruta]);
  }



}
