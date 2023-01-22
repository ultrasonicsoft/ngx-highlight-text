import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }

  transform(value: string, args: string): unknown {
    if (!args) {
      return value;
    }
    const regex = new RegExp(args, 'gi');
    const match = value.match(regex);

    if (!match) {
      return value;
    }
    const html = `<span style="background-color:yellow; font-weight:bold">${match[0]}</span>`;
    return this.sanitizer.bypassSecurityTrustHtml(value.replace(regex, html));
  }

}
