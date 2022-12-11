import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternalServerComponent } from './error-pages/internal-server/internal-server.component';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {path: 'home-page', component: HomePageComponent},
  {path: 'window-type', loadChildren: () => import('./_components/window-type/window-type.module').then(m=>m.WindowTypeModule)},
  {path: 'cleaning-type', loadChildren: () => import('./_components/cleaning-type/cleaning-type.module').then(m=>m.CleaningTypeModule)},
  {path: 'product', loadChildren: () => import('./_components/product/product.module').then(m=>m.ProductModule)},
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
