//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[spInert]',
})
export class InertDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @Input('spInert')
  set inert(flag: boolean) {
    if (flag) {
      this.renderer.addClass(this.el.nativeElement, 'sp-inert');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'sp-inert');
    }
  }
}
