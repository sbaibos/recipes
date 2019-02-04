import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import {HttpClientModule} from '@angular/common/http';

import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import {FilterPipe} from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
  HttpClientModule,
  FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
