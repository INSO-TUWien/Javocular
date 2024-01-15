import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarcharCIMRComponent} from "./barchart-CIMR/barchar-CIMR.component";
import {HomeComponent} from "./home/home.component";
import { HttpClientModule } from '@angular/common/http';
import {NgOptimizedImage} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HistogramCIMRComponent} from "./histogram-cimr/histogram-cimr.component";

@NgModule({
  declarations: [
    AppComponent,
    BarcharCIMRComponent,
    HistogramCIMRComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
