//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProtocolsComponent } from './form-protocols.component';

describe('FormProtocolsComponent', () => {
  let component: FormProtocolsComponent;
  let fixture: ComponentFixture<FormProtocolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormProtocolsComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProtocolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
