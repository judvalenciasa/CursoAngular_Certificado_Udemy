import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Producto } from '../modelos/producto.modelo';

@Component({
  selector: 'app-formulario-compras',
  templateUrl: './formulario-compras.component.html',
  styleUrls: ['./formulario-compras.component.css']
})
export class FormularioComprasComponent implements OnInit {

  @Output() productoCreado:EventEmitter<Producto>;
  nuevoProducto:Producto;
  
  constructor() {  
    this.productoCreado = new EventEmitter();
    this.nuevoProducto = new Producto();
  }

  ngOnInit(): void {
  }

  onClickCrear(){
    this.productoCreado.emit(this.nuevoProducto);
    this.nuevoProducto = new Producto();
  }
  
}
