import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassifierComponent } from './classifier/classifier.component';
import { HomeComponent } from './home/home.component';
import { DataComponent } from './data/data.component';
import { TrainComponent } from './train/train.component';
import { FileDropModule } from 'ngx-file-drop';


@NgModule({
  declarations: [
    AppComponent,
    ClassifierComponent,
    HomeComponent,
    DataComponent,
    TrainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FileDropModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
