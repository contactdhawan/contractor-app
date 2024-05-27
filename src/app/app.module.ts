import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
// import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,    
    SearchComponent
    
  ],
  imports: [
    BrowserModule,
    MyComponentComponent,
    FormsModule, // Add FormsModule to imports
    HttpClientModule, BrowserAnimationsModule, // Import HttpClientModule
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
