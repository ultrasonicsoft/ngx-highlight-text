import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }

  transform(value: string, highlightWord: string, highlightColor?: string): unknown {
    if (!highlightWord) {
      return value;
    }
    const regex = new RegExp(highlightWord, 'gi');
    const match = value.match(regex);

    if (!match) {
      return value;
    }
    if (!highlightColor) {
      highlightColor = 'yellow';
    }
    const html = `<span style="background-color:${highlightColor}; font-weight:bold">${match[0]}</span>`;
    return this.sanitizer.bypassSecurityTrustHtml(value.replace(regex, html));
  }

}
