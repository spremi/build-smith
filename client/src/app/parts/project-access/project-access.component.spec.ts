//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAccessComponent } from './project-access.component';

describe('ProjectAccessComponent', () => {
  let component: ProjectAccessComponent;
  let fixture: ComponentFixture<ProjectAccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectAccessComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
