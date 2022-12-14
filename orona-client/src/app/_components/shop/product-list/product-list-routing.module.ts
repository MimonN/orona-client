import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopProductListComponent } from './shop-product-list/shop-product-list.component';

const routes: Routes = [
  {path: 'product-list', component: ShopProductListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductListRoutingModule { }
