import { Directive, HostListener, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDate]'
})
export class DateDirective {

  @Input()
  private date: string;
  private paragraph;


  constructor(private elem: ElementRef, private renderer: Renderer2) {
      this.paragraph = this.renderer.createElement('p');
   }

  @HostListener('mouseenter')
  mouseenter(eventDate: Event) {
    this.paragraph.innerHTML = this.date.toLocaleString();
    this.renderer.appendChild(this.elem.nativeElement, this.paragraph);
    this.renderer.setStyle(this.elem.nativeElement, 'background', 'pink');
  }

  @HostListener('mouseleave')
  mouseleave(eventDate: Event) {
    this.renderer.removeChild(this.elem.nativeElement, this.paragraph);
    this.renderer.setStyle(this.elem.nativeElement, 'background', 'aquamarine');
  }


}
