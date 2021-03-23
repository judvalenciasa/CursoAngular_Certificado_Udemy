import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from '../modelos/producto.modelo';

@Component({
  selector: 'app-lista-productos-compras',
  templateUrl: './lista-productos-compras.component.html',
  styleUrls: ['./lista-productos-compras.component.css']
})
export class ListaProductosComprasComponent implements OnInit {

  @Input() productos:Producto[];
  @Output() productoSeleccionado:EventEmitter<number>;
  @Input() textoBoton:string;

  constructor() {
    this.productoSeleccionado = new EventEmitter();
   }

  ngOnInit(): void {
    
  }

  onClick(indice){
    this.productoSeleccionado.emit(indice);
  }

}
