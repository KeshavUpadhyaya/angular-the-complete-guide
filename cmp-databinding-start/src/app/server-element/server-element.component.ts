import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  // tslint:disable-next-line: no-input-rename
  @Input('srvElement') element: { type: string; name: string; content: string };

  @Input() name: string;

  @ViewChild('heading', { static: true }) header: ElementRef;

  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;
  constructor() {
    console.log('constructor called');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterView init called');
    console.log('text content: ' + this.header.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log('ngAftercontent checked called');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContent init called');
    console.log(
      'paragraph content: ' + this.paragraph.nativeElement.textContent
    );
  }

  ngDoCheck(): void {
    console.log('do check called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
    console.log('text content: ' + this.header.nativeElement.textContent);
    console.log(
      'paragraph content: ' + this.paragraph.nativeElement.textContent
    );
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }
}
