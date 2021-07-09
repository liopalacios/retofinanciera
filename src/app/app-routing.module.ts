import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//components
import { ClienteComponent } from './components/cliente/cliente.component';
import { ProductoComponent } from './components/producto/producto.component';
import { VentaComponent } from './components/venta/venta.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/venta',
    pathMatch: 'full'
  },
  {
    path: 'venta',
    component: VentaComponent
  },
  {
    path: 'producto',
    component: ProductoComponent
  },
  {
    path: 'cliente',
    component: ClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
