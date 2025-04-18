import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';



const routes: Routes = [
    { path: 'cart', component: OrderDetailsComponent},
    {path: 'confirmation', component: OrderConfirmationComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }