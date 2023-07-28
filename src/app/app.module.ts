import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FakestoreComponent } from './components/fakestore/fakestore.component';
import { FormsModule } from '@angular/forms';
import { ShoopingSiteComponent } from './components/shooping-site/shooping-site.component';
import { PracticeComponentComponent } from './components/practice-component/practice-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FakestoreComponent,
    ShoopingSiteComponent,
    PracticeComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [ShoopingSiteComponent]
})
export class AppModule { }
