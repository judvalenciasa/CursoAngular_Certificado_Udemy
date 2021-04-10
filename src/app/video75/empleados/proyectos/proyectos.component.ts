import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  constructor(private activateRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRouter.parent.params.subscribe(params => {
      console.log(params.empleadoId);
    });

  }

}
