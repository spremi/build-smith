//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormScmComponent } from './form-scm.component';

describe('FormScmComponent', () => {
  let component: FormScmComponent;
  let fixture: ComponentFixture<FormScmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormScmComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormScmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
