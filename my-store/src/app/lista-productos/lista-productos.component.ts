import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Producto } from '../producto-interface';
import { productos } from '../producto';
import { AlertaProductoComponent } from '../alerta-producto/alerta-producto.component';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [CommonModule, AlertaProductoComponent],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent {
  productos:Producto[] = productos;

  @Output () valueResponse: EventEmitter<Producto> = new EventEmitter();

  onAviso(producto: Producto){
    this.valueResponse.emit(producto);
  }
}
