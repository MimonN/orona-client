import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CleaningTypeRoutingModule } from './cleaning-type-routing.module';
import { CleaningTypeListComponent } from './cleaning-type-list/cleaning-type-list.component';
import { CreateCleaningTypeComponent } from './create-cleaning-type/create-cleaning-type.component';
import { FormsModule } from '@angular/forms';
import { UpdateCleaningTypeComponent } from './update-cleaning-type/update-cleaning-type.component';


@NgModule({
  declarations: [
    CleaningTypeListComponent,
    CreateCleaningTypeComponent,
    UpdateCleaningTypeComponent
  ],
  imports: [
    CommonModule,
    CleaningTypeRoutingModule,
    FormsModule
  ]
})
export class CleaningTypeModule { }
