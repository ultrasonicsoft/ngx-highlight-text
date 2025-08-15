import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HighlightComponent } from '../../../../dist/ngx-highlight-text';
import { HighlightPipe } from '../../../ngx-highlight-text/src/lib/highlight.pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HighlightComponent, HighlightPipe],
  template: `<h1>Demo v20 - ngx-highlight-text</h1>
    <section>
      <h2>{{ sample1 }}</h2>
      <p highlight [content]="description" terms="Angular"></p>
    </section>
    <section>
      <h2>{{ sample2 }}</h2>
      <p
        highlight
        [content]="description"
        [terms]="['Angular', 'page']"
        hl-color-bg="cyan"
        [match-case]="true"
      ></p>
    </section>
    <section>
      <h2 style="font-family:monospace">{{ sample3 }}</h2>
      <p [innerHTML]="description | highlight : 'page' : 'pink'"></p>
    </section> `,
  styles: [
    `
      section {
        margin: 1em;
        padding: 0 2em;
        border: 1px solid #ccc;
        h2 {
          font-family: monospace;
          font-weight: normal;
          font-size: 1rem;
        }
      }
    `,
  ],
})
export class App {
  protected readonly title = signal('demo-v20');
  sample1 = `<p highlight [content]="description" terms="Angular"></p>`;
  color2:string="'pink'";
  sample2 = `<p highlight [content]="description" [terms]="['Angular','page']" hl-color-bg="cyan" [match-case]="true"></p>`;
  sample3 = `<p [innerHTML]="description | highlight: 'page': 'pink'"></p>`;
  description = `Angular is an application-design framework and development platform for creating efficient and sophisticated
  Single-Page apps.

  These Angular docs help you learn and use the Angular framework and development platform, from your first application
  to optimizing complex single - page applications for enterprises.Tutorials and guides include downloadable examples to
  help you start your projects.`;
}
