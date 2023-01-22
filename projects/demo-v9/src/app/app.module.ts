import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxHighlightTextModule } from 'projects/ngx-highlight-text/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxHighlightTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
