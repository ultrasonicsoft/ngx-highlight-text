# Angular Component for highlighting the text in HTML

This package contains an Angular component to highlight one or many words in a given text.


> Note that, this library supports any Angular projects from version 20 onwards till latest version.

This project is forked from [ultrasonicsoft/ngx-highlight-text](https://github.com/ultrasonicsoft/ngx-highlight-text)
With the following differences:

1. Compatible with modern angular, specifically standalone components
2. Provides the functionality as a component instead of a pipe
3. Allow application to highlight multiple terms
4. Provide application with more styling options

The highlighting logic is unaltered from the original.

## Install

You can get it on npm.

```bash
npm install ngx-highlight-text --save
```

## Setup / Usage

* Import `HighlightComponent` into any component that needs highlighting

```ts
import { HighlightComponent } from "ngx-highlight-text2";

@Component({
  template: `
    <h1 highlight content="Demo page" terms="m"></h1>
    <p highlight [content]="description" [terms]="blah"></p>       
    <p highlight [content]="d2" [terms]="['mom','dad']"></p>       
    `,
  imports: [
    HighlightComponent
  ]
})
export class MyComponent {
  description="blah blah blah";
  d2="hi mom, hi dad";
 }
```

## Parameter

| Property    | Description                                                                                              | Type              | Default  |
| ----------- | -------------------------------------------------------------------------------------------------------- | ----------------- | -------- |
| `[content]`    | the text to be highlighted | `string` | |
| `[terms]`    | the term or terms to highlight | `string` or `string[]` |  |
| `[hl-color-bg]`    | the background color to highlight a term | `string` | `yellow` |
| `[hl-color-fg]`    | the foreground color to highlight a term | `string` | `black` |
| `[hl-style]`    | the full css style to highlight a term | `string` | `font-weight:bold` |
| `[hl-class]`    | the name of css class to highlight a term (superceedes `[hl-style]`) | `string` | |
| `[match-all]`    | if true match all instances within the content, otherwise just match the first one | `boolean` | `true` |
| `[match-case]`    | if true match case exactly, otherwise ignore case | `boolean` | `false` |

## Example

![screen shot of rendered components](image.png)

## License

[MIT License](https://github.com/ultrasonicsoft/ngx-highlight-text/blob/main/license) © Balram Chavan
