//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectStateComponent } from './project-state.component';

describe('ProjectStateComponent', () => {
  let component: ProjectStateComponent;
  let fixture: ComponentFixture<ProjectStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectStateComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
