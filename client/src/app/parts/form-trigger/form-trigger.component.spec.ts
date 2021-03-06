//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { InertDirective } from 'src/app/dictums/inert/inert.directive';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { FormTriggerComponent } from './form-trigger.component';

describe('FormTriggerComponent', () => {
  let component: FormTriggerComponent;
  let fixture: ComponentFixture<FormTriggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [FormTriggerComponent, InertDirective],
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
