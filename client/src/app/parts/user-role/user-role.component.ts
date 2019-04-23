//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Component, Input, OnInit } from '@angular/core';
import { DisplayOptions } from 'src/app/models/generic';
import { UserRole } from 'src/app/models/user';

@Component({
  selector: 'sp-user-role',
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.sass'],
})
export class UserRoleComponent implements OnInit {
  /**
   * User role.
   */
  role: UserRole;

  /**
   * Render text?
   */
  asText = true;

  /**
   * Render as icon?
   */
  asIcon = false;

  /**
   * Render text as tooltip to icon?
   */
  withTooltip = false;

  /**
   * Name of icon - based on value 'status'.
   */
  iconName = '';

  /**
   * Name of class - based on value 'status'.
   */
  iconClass = '';

  @Input()
  set arg(val: UserRole) {
    if (!val) {
      this.role = null;
      return;
    }

    this.role = val;

    switch (val) {
      case UserRole.VIEWER:
        this.iconName = 'role_viewer';
        this.iconClass = 'role-viewer';
        break;

      case UserRole.BUILDER:
        this.iconName = 'role_builder';
        this.iconClass = 'role-builder';
        break;

      case UserRole.PROJADMIN:
        this.iconName = 'role_proj_admin';
        this.iconClass = 'role-proj-admin';
        break;

      case UserRole.SYSADMIN:
        this.iconName = 'role_sys_admin';
        this.iconClass = 'role-sys-admin';
        break;

      default:
    }
  }

  @Input()
  set as(str: string) {
    if (str) {
      const tokens = str.split(/\s*,\s*/);

      this.asText = tokens.includes(DisplayOptions.TEXT);
      this.asIcon = tokens.includes(DisplayOptions.ICON);
      this.withTooltip = tokens.includes(DisplayOptions.TOOLTIP);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
