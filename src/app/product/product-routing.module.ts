import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';



export const routes: Routes = [
    { path: ':id', component: ProductDetailsComponent,
      data: {
        renderMode: 'server'
      },
    },
    { path: '', component: ProductListComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
