import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Producto } from '../modelos/producto.modelo';

@Component({
  selector: 'app-compras-pa-pa',
  templateUrl: './compras-pa-pa.component.html',
  styleUrls: ['./compras-pa-pa.component.css']
})
export class ComprasPaPaComponent implements OnInit {

  listaProductos:Producto[];
  listaProductosComprados:Producto[];

  @Input() indice:number;

  
  constructor() { 
    this.listaProductos = [];
    this.listaProductosComprados = [];
  }

  onProductoCreado($event){
    this.listaProductos.push($event);
  }

  ngOnInit(): void {
    
  }

  onProductosSeleccionados($event){
    const prod = this.listaProductos.splice($event, 1);
    this.listaProductosComprados.push(prod[0]);
  }

  onProductosNoSeleccionado($event){
    const prod = this.listaProductosComprados.splice($event, 1);
    this.listaProductos.push(prod[0]);
  }

}
