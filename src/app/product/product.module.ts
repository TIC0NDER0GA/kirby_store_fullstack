import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductDetailsComponent } from './product-details/product-details.component';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductItemComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductListComponent, 
    ProductItemComponent,
    ProductDetailsComponent   
  ]
})
export class ProductModule { }
