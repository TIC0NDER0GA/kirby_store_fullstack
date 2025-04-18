import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';




@NgModule({
  declarations: [
    ProductListComponent,
    ProductItemComponent,
    ProductDetailsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductRoutingModule
  ],
  exports: [
    ProductListComponent, 
    ProductItemComponent,
    ProductDetailsComponent   
  ]
})
export class ProductModule { }
