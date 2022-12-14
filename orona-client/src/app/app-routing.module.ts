import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternalServerComponent } from './error-pages/internal-server/internal-server.component';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {path: 'home-page', component: HomePageComponent},
  {path: 'cms/window-type', loadChildren: () => import('./_components/CMS/window-type/window-type.module').then(m=>m.WindowTypeModule)},
  {path: 'cms/cleaning-type', loadChildren: () => import('./_components/CMS/cleaning-type/cleaning-type.module').then(m=>m.CleaningTypeModule)},
  {path: 'cms/product', loadChildren: () => import('./_components/CMS/product/product.module').then(m=>m.ProductModule)},
  {path: 'shop/product', loadChildren: () => import('./_components/shop/product-list/product-list.module').then(m=>m.ProductListModule)},
  {path: '404', component: NotFoundComponent},
  {path: '500', component: InternalServerComponent},
  {path: '', redirectTo: '/home-page', pathMatch: 'full'},
  {path: '**', redirectTo: '/404', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
