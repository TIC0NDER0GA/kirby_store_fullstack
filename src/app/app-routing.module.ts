import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/product', pathMatch: 'full' },  // Default route
  { 
    path: 'product', 
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule)  // Lazy-load Product module
  },
  { 
    path: 'orders', 
    loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)
  },
  { path: '**', redirectTo: '/product' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
