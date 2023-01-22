# Angular Pipe for highlighting the text in HTML

This package contains an Angular pipe to highlight a word in a given text.

> Note that, this library supports any Angular projects from version 9 onwards till latest version.


## Install

You can get it on npm.

```
npm install ngx-highlight-text --save
```

## Setup

*  Import `NgxHighlightTextModule` into your application `AppModule`

```ts
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


```

## Usage - Highlight a word
* Use `innerHTML` property binding of a text element e.g. <p> and pass the source text, word to highlight and optional highlight color. Default highlight color is `yellow`. 


```html
<p [innerHTML]="description | highlight: 'Angular'"></p>
<p [innerHTML]="description | highlight: 'page': 'cyan'"></p>
```

## License

[MIT License](https://github.com/ultrasonicsoft/ngx-highlight-text/blob/main/license) © Balram Chavan
