import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrl: './element.component.css'
})
export class ElementComponent implements 
OnInit,
OnChanges,
DoCheck, 
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy{
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() {
    console.log('constructor called !');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called !');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called !');
    console.log('Text content' + this.header.nativeElement.textContent);
    console.log('Text content of paragraph ' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called !');
    console.log('Text content of paragraph ' + this.paragraph.nativeElement.textContent);
  }
  
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called !');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called !');
    console.log('Text content ' + this.header.nativeElement.textContent);
  }
  
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called !');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called !');
  }
}
