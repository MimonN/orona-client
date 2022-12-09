import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WindowTypeRoutingModule } from './window-type-routing.module';
import { WindowTypeListComponent } from './window-type-list/window-type-list.component';
import { CreateWindowTypeComponent } from './create-window-type/create-window-type.component';
import { FormsModule } from '@angular/forms';
import { UploadImageComponent } from './create-window-type/image/upload-image/upload-image.component';
import { UpdateWindowTypeComponent } from './update-window-type/update-window-type.component';


@NgModule({
  declarations: [
    WindowTypeListComponent,
    CreateWindowTypeComponent,
    UploadImageComponent,
    UpdateWindowTypeComponent
  ],
  imports: [
    CommonModule,
    WindowTypeRoutingModule,
    FormsModule
  ]
})
export class WindowTypeModule { }
