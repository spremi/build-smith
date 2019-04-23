//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { UserRoleComponent } from 'src/app/parts/user-role/user-role.component';
import { UserStatusComponent } from 'src/app/parts/user-status/user-status.component';
import { UserRolePipe } from 'src/app/pipes/user-role.pipe';
import { UserStatusPipe } from 'src/app/pipes/user-status.pipe';
import { UserListComponent } from './user-list.component';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NoopAnimationsModule,
        MaterialModule,
      ],
      declarations: [
        UserListComponent,
        UserRoleComponent,
        UserStatusComponent,
        UserRolePipe,
        UserStatusPipe,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
