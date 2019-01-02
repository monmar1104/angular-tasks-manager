import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { element } from 'protractor';

@Directive({
  selector: '[appChecked]'
})
export class CheckedDirective implements OnInit {

  constructor(private elem: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    const li = this.elem.nativeElement;
    this.renderer.setStyle(li, 'list-style-image', 'url(/assets/checked.png');
    this.renderer.setStyle(li, 'background', 'aquamarine');
  }
}
