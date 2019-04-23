//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Component, Input, OnInit } from '@angular/core';
import { DisplayOptions } from 'src/app/models/generic';
import { UserStatus } from 'src/app/models/user';

@Component({
  selector: 'sp-user-status',
  templateUrl: './user-status.component.html',
  styleUrls: ['./user-status.component.sass'],
})
export class UserStatusComponent implements OnInit {
  /**
   * User status.
   */
  status: UserStatus;

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
  set arg(val: UserStatus) {
    if (!val) {
      this.status = null;
      return;
    }

    this.status = val;

    switch (val) {
      case UserStatus.ACTIVE:
        this.iconName = 'user_active';
        this.iconClass = 'user-active';
        break;

      case UserStatus.INACTIVE:
        this.iconName = 'user_inactive';
        this.iconClass = 'user-inactive';
        break;

      case UserStatus.RETIRED:
        this.iconName = 'user_retired';
        this.iconClass = 'user-retired';
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
