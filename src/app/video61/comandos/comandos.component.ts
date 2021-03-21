import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../modelos/producto.models';

@Component({
  selector: 'app-comandos',
  templateUrl: './comandos.component.html',
  styleUrls: ['./comandos.component.css']
})
export class ComandosComponent implements OnInit {
  @Input() arrProductos:Producto[];
  constructor() { }

  ngOnInit(): void {
  }

  calculaTotal(){
    let resultado=0;

    for(let producto of this.arrProductos){
      resultado += (producto.precio)*producto.cantidad; 
    }

    return resultado;
  }

  onClickBorrar(pIndice){
    if(this.arrProductos[pIndice].cantidad === 1){
      this.arrProductos.splice(pIndice,1);
    }else{
      this.arrProductos[pIndice].cantidad--;
    }
    
  }

}
