import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CleaningTypeRoutingModule } from './cleaning-type-routing.module';
import { CleaningTypeListComponent } from './cleaning-type-list/cleaning-type-list.component';
import { CreateCleaningTypeComponent } from './create-cleaning-type/create-cleaning-type.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CleaningTypeListComponent,
    CreateCleaningTypeComponent
  ],
  imports: [
    CommonModule,
    CleaningTypeRoutingModule,
    FormsModule
  ]
})
export class CleaningTypeModule { }
