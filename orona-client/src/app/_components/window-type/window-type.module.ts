import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WindowTypeRoutingModule } from './window-type-routing.module';
import { WindowTypeListComponent } from './window-type-list/window-type-list.component';
import { CreateWindowTypeComponent } from './create-window-type/create-window-type.component';
import { FormsModule } from '@angular/forms';
import { UpdateWindowTypeComponent } from './update-window-type/update-window-type.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';


@NgModule({
  declarations: [
    WindowTypeListComponent,
    CreateWindowTypeComponent,
    UpdateWindowTypeComponent,
    ImageUploadComponent
  ],
  imports: [
    CommonModule,
    WindowTypeRoutingModule,
    FormsModule
  ]
})
export class WindowTypeModule { }
