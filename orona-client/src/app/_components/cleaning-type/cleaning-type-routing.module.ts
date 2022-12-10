import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CleaningTypeListComponent } from './cleaning-type-list/cleaning-type-list.component';
import { CreateCleaningTypeComponent } from './create-cleaning-type/create-cleaning-type.component';

const routes: Routes = [
  {path: 'list', component: CleaningTypeListComponent},
  {path: 'create', component: CreateCleaningTypeComponent},
  {path: 'edit/:id', component: CleaningTypeListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CleaningTypeRoutingModule { }
