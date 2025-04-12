import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderCartComponent } from '../order-cart/order-cart.component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';

@NgModule({
  declarations: [OrderCartComponent

  ],
  imports: [
    CommonModule,
    FormsModule
    
  ],
  exports: [OrderCartComponent],
  providers: [
    provideHttpClient(withFetch())

  ],
})
export class SharedModule { }
