import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProductoComponent } from './pages/crear-producto/crear-producto.component';
import { HomeComponent } from './pages/home/home.component';
import { ListarProductosComponent } from './pages/listar-productos/listar-productos.component';
import { SubscriptionComponent } from './pages/subscription/subscription.component';

const routes: Routes = [
  {path:'' ,component: HomeComponent},
  {path:'subcription' ,component: SubscriptionComponent},
  {path:'lista' ,component: ListarProductosComponent},
  {path:'crear-studiante' ,component: CrearProductoComponent},
  {path:'editar-student/:id' ,component: CrearProductoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
