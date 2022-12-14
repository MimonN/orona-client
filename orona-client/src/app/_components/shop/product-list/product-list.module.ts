import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListRoutingModule } from './product-list-routing.module';
import { ShopProductListComponent } from './shop-product-list/shop-product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ShopProductListComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    ProductListRoutingModule,
    FormsModule
  ]
})
export class ProductListModule { }
