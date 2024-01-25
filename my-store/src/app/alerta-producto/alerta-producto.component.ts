import { Component, Input } from '@angular/core';
import { Producto } from '../producto-interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alerta-producto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alerta-producto.component.html',
  styleUrl: './alerta-producto.component.css'
})
export class AlertaProductoComponent {
  @Input() producto!: Producto


  avisoButton(producto:Producto){
    alert("Serás avisado para comprar el producto " + producto.nombre);
  }
}
