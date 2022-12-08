import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    WindowTypeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
