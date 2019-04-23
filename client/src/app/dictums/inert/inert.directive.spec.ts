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

import { InertDirective } from './inert.directive';

@Component({
  selector: 'sp-test',
  template: `
    <div>
      <div id="a" [spInert]="true"></div>
      <div id="b" [spInert]="false"></div>
    </div>
  `,
})
class TestComponent { }

describe('InertDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let testComponent: TestComponent;
  let testContainer: HTMLDivElement;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        InertDirective,
      ],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);

    testComponent = fixture.componentInstance;
    testContainer = fixture.nativeElement;
  }));


  it('should have class sp-inert (when true)', () => {
    const targetDiv = testContainer.querySelector('#a') as HTMLDivElement;

    expect(targetDiv.classList.contains('sp-inert')).toBeTruthy();
  });

  it('shouldn\'t have class sp-inert (when false)', () => {
    const targetDiv = testContainer.querySelector('#b') as HTMLDivElement;

    expect(targetDiv.classList.contains('sp-inert')).toBeFalsy();
  });
});
