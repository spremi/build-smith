//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { LabelValue } from 'src/app/models/generic';
import { User, UserRole, UserStatus } from 'src/app/models/user';

@Component({
  selector: 'sp-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.sass'],
})
export class UserInfoComponent implements OnInit {
  /**
   * List of options for user role
   */
  readonly RoleOpts: LabelValue[] = [
    {
      label: 'Viewer',
      value: UserRole.VIEWER,
    },
    {
      label: 'Builder',
      value: UserRole.BUILDER,
    },
    {
      label: 'Project Administrator',
      value: UserRole.PROJADMIN,
    },
    {
      label: 'System Administrator',
      value: UserRole.SYSADMIN,
    },
  ];

  /**
   * List of options for user status
   */
  readonly StatusOpts: LabelValue[] = [
    {
      label: 'Active',
      value: UserStatus.ACTIVE,
    },
    {
      label: 'Inactive',
      value: UserStatus.INACTIVE,
    },
    {
      label: 'Retired',
      value: UserStatus.RETIRED,
    },
  ];

  /**
   * User information (Dummy value)
   */
  user: User = {
    id: 'b01',
    role: UserRole.SYSADMIN,
    status: UserStatus.ACTIVE,
    userName: 'admin',
    fullName: 'Admi Nistrator',
    credentials: null,
  };

  /**
   * Form group for this component.
   */
  userForm: FormGroup;

  /**
   * Can user edit the form?
   */
  canEdit = false;

  /**
   * Is user editing the form?
   */
  isEditing = false;

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.createForm();
  }

  private createForm(): FormGroup {
    return this.fb.group({
      role: this.user.role,
      status: this.user.status,
      userName: this.user.userName,
      fullName: this.user.fullName,
    });
  }

  /**
   * Discard changes.
   */
  onDiscard() {
    this.isEditing = false;

    this.userForm.reset({
      role: this.user.role,
      status: this.user.status,
      userName: this.user.userName,
      fullName: this.user.fullName,
    });
  }

  /**
   * Save changes.
   */
  onSave() {
    this.isEditing = false;

    console.log(this.userForm.value);
  }
}
