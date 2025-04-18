import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderItemsComponent } from './order-items/order-items.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { OrderRoutingModule } from './order-routing.module';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';




@NgModule({
  declarations: [
    OrderDetailsComponent,
    OrderItemsComponent,
    OrderConfirmationComponent
  ],
  imports: [
    CommonModule, 
    FormsModule,
    OrderRoutingModule,
    SharedModule

  ]
})
export class OrdersModule { }
