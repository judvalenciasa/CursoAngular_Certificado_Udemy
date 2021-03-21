import { Component, OnInit } from '@angular/core';
import { Producto } from '../modelos/producto.modelo';

@Component({
  selector: 'app-formulario-compras',
  templateUrl: './formulario-compras.component.html',
  styleUrls: ['./formulario-compras.component.css']
})
export class FormularioComprasComponent implements OnInit {

  nuevoProducto:Producto;
  constructor() { 
    this.nuevoProducto = new Producto();
  }

  ngOnInit(): void {
  }

}
