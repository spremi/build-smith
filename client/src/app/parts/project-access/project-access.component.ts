//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Component, Input, OnInit } from '@angular/core';
import { DisplayOptions } from 'src/app/models/generic';
import { ProjectAccess } from 'src/app/models/project';

@Component({
  selector: 'sp-project-access',
  templateUrl: './project-access.component.html',
  styleUrls: ['./project-access.component.sass'],
})
export class ProjectAccessComponent implements OnInit {
  /**
   * Project access
   */
  access: ProjectAccess;

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
   * Text label.
   */
  label = '';

  /**
   * Tooltip.
   */
  tooltip = '';

  /**
   * Name of icon - based on value 'access'.
   */
  icon = '';

  /**
   * Name of class - based on value 'access'.
   */
  variant = '';

  @Input()
  set arg(val: ProjectAccess) {
    if (!val) {
      this.access = null;
      return;
    }

    this.access = val;

    switch (val) {
      case ProjectAccess.PUBLIC:
        this.label = 'PUBLIC';
        this.icon = 'access_public';
        this.variant = 'access-public';
        this.tooltip = 'Project can be viewed by any user.';
        break;

      case ProjectAccess.VERIFIED:
        this.label = 'VERIFIED';
        this.icon = 'access_verified';
        this.variant = 'access-verified';
        this.tooltip = 'Project can be viewed by verified users only.';
        break;

      case ProjectAccess.SPECIFIC:
        this.label = 'SPECIFIC';
        this.icon = 'access_specific';
        this.variant = 'access-specific';
        this.tooltip = 'Project can be viewed by specific users only.';
        break;

      case ProjectAccess.ADMIN:
        this.label = 'ADMINS';
        this.icon = 'access_admin';
        this.variant = 'access-admin';
        this.tooltip = 'Project can be viewed by admins only.';
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
