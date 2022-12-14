import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShopProductListComponent } from './shop-product-list/shop-product-list.component';

const routes: Routes = [
  {path: 'product-list', component: ShopProductListComponent},
  {path: 'product-details/:id', component: ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductListRoutingModule { }
