//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import { Component } from '@angular/core';

@Component({
  selector: 'sp-header',
  template: '<span>Mock Header</span>',
})
export class MockHeaderComponent { }

@Component({
  selector: 'sp-body',
  template: '<span>Mock Body</span>',
})
export class MockBodyComponent { }

@Component({
  selector: 'sp-footer',
  template: '<span>Mock Footer</span>',
})
export class MockFooterComponent { }

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent,
        MockHeaderComponent,
        MockBodyComponent,
        MockFooterComponent,
      ],
    })
      .compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
