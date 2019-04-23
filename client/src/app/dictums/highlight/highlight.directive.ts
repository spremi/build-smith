//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[spHighlight]',
})
export class HighlightDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight(true);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight(false);
  }

  private highlight(flag: boolean) {
    if (flag) {
      this.renderer.addClass(this.el.nativeElement, 'mat-elevation-z2');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'mat-elevation-z2');
    }
  }
}
