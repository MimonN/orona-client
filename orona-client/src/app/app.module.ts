import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {CollapseModule} from 'ngx-bootstrap/collapse';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { WindowTypeModule } from './_components/window-type/window-type.module';
import { InternalServerComponent } from './error-pages/internal-server/internal-server.component';
import { CleaningTypeModule } from './_components/cleaning-type/cleaning-type.module';
import { ProductModule } from './_components/product/product.module';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    NotFoundComponent,
    InternalServerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CollapseModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    WindowTypeModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    CleaningTypeModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
