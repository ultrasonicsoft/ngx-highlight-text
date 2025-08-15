import { Component, HostBinding, inject, input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: '[highlight]',
  template: ``,
  imports: [],
})
export class HighlightComponent {
  private sanitizer = inject(DomSanitizer);
  @HostBinding('innerHTML') adjusted: any = '';
  readonly terms = input<string | string[]>('');
  readonly content = input<string>('');
  colorBg = input<string>('yellow', { alias: 'hl-color-bg' });
  colorFg = input<string>('black', { alias: 'hl-color-fg' });
  cssStyle = input<string | null>(null, { alias: 'hl-style' });
  cssClass = input<string | null>(null, { alias: 'hl-class' });
  matchAll = input<boolean>(true, { alias: 'match-all' });
  matchCase = input<boolean>(false, { alias: 'match-case' });

  ngOnInit() {
    let value = this.content();
    const highlightWords = Array.isArray(this.terms())
      ? this.terms()
      : [this.terms() as string];
    let regexFlags = '';
    if (this.matchAll()) 
      regexFlags += 'g';
    if (!this.matchCase()) 
      regexFlags += 'i';
    for (const highlightWord of highlightWords) {
      if (highlightWord) {
        const regex = new RegExp(highlightWord, regexFlags);
        const match = value.match(regex);

        if (match) {
          value = value.replace(
            regex,
            `<span ${this.spanDecoration()}>${match[0]}</span>`
          );
        }
      }
    }
    this.adjusted = value.includes('<span')
      ? this.sanitizer.bypassSecurityTrustHtml(value)
      : value;
  }

  private spanDecoration() {
    if (this.cssClass()) {
      return `class="${this.cssClass()}"`;
    } else {
      const styles:string[] = [];
      if (this.colorBg()) {
        styles.push(`background-color:${this.colorBg()}`);
      }
      if (this.colorFg()) {
        styles.push(`color:${this.colorFg()}`);
      }
      if (this.cssStyle()) {
        styles.push(this.cssStyle() as string);
      } else {
        styles.push('font-weight:bold');
      }
      return `style="${styles.join(';')}"`;
    }
  }
}
