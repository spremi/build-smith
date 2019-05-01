//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTriggerComponent } from './form-trigger.component';

describe('FormTriggerComponent', () => {
  let component: FormTriggerComponent;
  let fixture: ComponentFixture<FormTriggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormTriggerComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
