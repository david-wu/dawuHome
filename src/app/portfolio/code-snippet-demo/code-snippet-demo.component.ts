import {
  // AfterViewInit,
  Component,
  // ElementRef,
  // OnChanges,
  // Input,
  // ViewEncapsulation,
  // ViewChild,
} from '@angular/core';

@Component({
  selector: 'dwu-code-snippet-demo',
  templateUrl: './code-snippet-demo.component.html',
  styleUrls: ['./code-snippet-demo.component.scss'],
})
export class CodeSnippetDemoComponent {
  public demoSnippet: string =
`console.log('This is a demo Snippet');
`;

  public usageSnippet: string =
`<dwu-code-snippet
  [snippet]="demoSnippet"
></dwu-code-snippet>`;

}
