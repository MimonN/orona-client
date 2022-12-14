import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListRoutingModule } from './product-list-routing.module';
import { ShopProductListComponent } from './shop-product-list/shop-product-list.component';


@NgModule({
  declarations: [
    ShopProductListComponent
  ],
  imports: [
    CommonModule,
    ProductListRoutingModule
  ]
})
export class ProductListModule { }
