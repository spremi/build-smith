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
import { RouterTestingModule } from '@angular/router/testing';
import { InertDirective } from 'src/app/dictums/inert/inert.directive';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { FormEmailComponent } from 'src/app/parts/form-email/form-email.component';
import { FormProtocolsComponent } from 'src/app/parts/form-protocols/form-protocols.component';
import { FormScmComponent } from 'src/app/parts/form-scm/form-scm.component';
import { FormStepComponent } from 'src/app/parts/form-step/form-step.component';
import { FormTriggerComponent } from 'src/app/parts/form-trigger/form-trigger.component';
import { FormWorkspaceComponent } from 'src/app/parts/form-workspace/form-workspace.component';
import { ProjectAccessComponent } from 'src/app/parts/project-access/project-access.component';
import { ProjectHealthComponent } from 'src/app/parts/project-health/project-health.component';
import { ProjectStateComponent } from 'src/app/parts/project-state/project-state.component';
import { ProjectStatusComponent } from 'src/app/parts/project-status/project-status.component';
import { ProjectInfoComponent } from './project-info.component';

describe('ProjectInfoComponent', () => {
  let component: ProjectInfoComponent;
  let fixture: ComponentFixture<ProjectInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NoopAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
      ],
      declarations: [
        ProjectInfoComponent,
        ProjectAccessComponent,
        ProjectHealthComponent,
        ProjectStateComponent,
        ProjectStatusComponent,
        FormEmailComponent,
        FormProtocolsComponent,
        FormScmComponent,
        FormStepComponent,
        FormTriggerComponent,
        FormWorkspaceComponent,
        InertDirective,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
