import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListarProductosComponent } from './listar-productos/listar-productos.component';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    SubscriptionComponent,
    ListarProductosComponent,
    CrearProductoComponent
  ],
  exports: [
    HomeComponent,
    SubscriptionComponent,
    ListarProductosComponent,
    CrearProductoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule


  ]
})
export class PagesModule { }
