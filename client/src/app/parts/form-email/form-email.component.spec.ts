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
import { FormEmailComponent } from './form-email.component';

describe('FormEmailComponent', () => {
  let component: FormEmailComponent;
  let fixture: ComponentFixture<FormEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [FormEmailComponent, InertDirective],
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
