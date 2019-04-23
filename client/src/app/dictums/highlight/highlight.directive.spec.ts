//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Component } from '@angular/core';
import {
  async, ComponentFixture, ComponentFixtureAutoDetect, TestBed
} from '@angular/core/testing';

import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'sp-test',
  template: `
  <div>
    <div id="a" spHighlight></div>
  </div>
  `,
})
class TestComponent { }

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let testComponent: TestComponent;
  let testContainer: HTMLDivElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        HighlightDirective,
      ],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);

    testComponent = fixture.componentInstance;
    testContainer = fixture.nativeElement;
  }));

  it('should have elevation on "mouseenter"', () => {
    const targetDiv = testContainer.querySelector('#a') as HTMLDivElement;

    expect(targetDiv.classList.contains('mat-elevation-z2')).toBeFalsy();

    targetDiv.dispatchEvent(new MouseEvent('mouseenter'));
    fixture.detectChanges();

    expect(targetDiv.classList.contains('mat-elevation-z2')).toBeTruthy();

    targetDiv.dispatchEvent(new MouseEvent('mouseleave'));
    fixture.detectChanges();

    expect(targetDiv.classList.contains('mat-elevation-z2')).toBeFalsy();
  });
});
