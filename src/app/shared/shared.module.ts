import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { OrderCartComponent } from '../order-cart/order-cart.component';

@NgModule({
  declarations: [
    NavBarComponent,
    OrderCartComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    
  ],
  exports: [NavBarComponent, OrderCartComponent],
  providers: [
    provideHttpClient(withFetch())
  ],
})
export class SharedModule { }
