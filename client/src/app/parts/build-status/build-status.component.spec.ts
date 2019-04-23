//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildStatusComponent } from './build-status.component';

describe('BuildStatusComponent', () => {
  let component: BuildStatusComponent;
  let fixture: ComponentFixture<BuildStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BuildStatusComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
