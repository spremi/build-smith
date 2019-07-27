//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEmailComponent } from './form-email.component';

describe('FormEmailComponent', () => {
  let component: FormEmailComponent;
  let fixture: ComponentFixture<FormEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormEmailComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
