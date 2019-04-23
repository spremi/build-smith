//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Component, Input, OnInit } from '@angular/core';
import { BuildStatus } from 'src/app/models/build';
import { DisplayOptions } from 'src/app/models/generic';

@Component({
  selector: 'sp-build-status',
  templateUrl: './build-status.component.html',
  styleUrls: ['./build-status.component.sass'],
})
export class BuildStatusComponent implements OnInit {
  /**
   * Build status.
   */
  status: BuildStatus;

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
  set arg(val: BuildStatus) {
    if (!val) {
      this.status = null;
      return;
    }

    this.status = val;

    switch (val) {
      case BuildStatus.ONGOING:
        this.iconName = 'status_ongoing';
        this.iconClass = 'build-ongoing';
        break;

      case BuildStatus.SUCCESS:
        this.iconName = 'status_success';
        this.iconClass = 'build-success';
        break;

      case BuildStatus.FAILURE:
        this.iconName = 'status_failure';
        this.iconClass = 'build-failure';
        break;

      case BuildStatus.ABORT:
        this.iconName = 'status_abort';
        this.iconClass = 'build-abort';
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
