import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GreetComponent } from './greet/greet.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { InWordsPipe } from './in-words.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GreetComponent,
    PipesDemoComponent,
    InWordsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
