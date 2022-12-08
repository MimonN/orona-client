import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateWindowTypeComponent } from './create-window-type/create-window-type.component';
import { WindowTypeListComponent } from './window-type-list/window-type-list.component';

const routes: Routes = [
  {path: 'list', component: WindowTypeListComponent},
  {path: 'create', component: CreateWindowTypeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WindowTypeRoutingModule { }
