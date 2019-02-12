import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import {HttpClientModule} from '@angular/common/http';

import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import {FilterPipe} from './pipes/filter.pipe';

import { ReactiveFormsModule } from '@angular/forms';// for the checkbox form

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
  HttpClientModule,
  FormsModule,
  ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
