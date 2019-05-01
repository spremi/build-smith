//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Component, Input, OnInit } from '@angular/core';
import { DisplayOptions } from 'src/app/models/generic';
import { ProjectStatus } from 'src/app/models/project';

@Component({
  selector: 'sp-project-status',
  templateUrl: './project-status.component.html',
  styleUrls: ['./project-status.component.sass'],
})
export class ProjectStatusComponent implements OnInit {
  /**
   * Project status.
   */
  status: ProjectStatus;

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
   * Icon.
   */
  icon = '';

  /**
   * Style variant to use.
   */
  variant = '';

  @Input()
  set arg(val: ProjectStatus) {
    if (!val) {
      this.status = null;
      return;
    }

    this.status = val;

    switch (val) {
      case ProjectStatus.NEVER:
        this.icon = 'status_never';
        this.variant = 'status-never';
        this.tooltip = 'The project was never built.';
        break;

      case ProjectStatus.ONGOING:
        this.icon = 'status_ongoing';
        this.variant = 'status-ongoing';
        this.tooltip = 'A build is in progress.';
        break;

      case ProjectStatus.SUCCESS:
        this.icon = 'status_success';
        this.variant = 'status-success';
        this.tooltip = 'Previous build was successful.';
        break;

      case ProjectStatus.FALIURE:
        this.icon = 'status_failure';
        this.variant = 'status-failure';
        this.tooltip = 'Previous build failed.';
        break;

      case ProjectStatus.ABORT:
        this.icon = 'status_abort';
        this.variant = 'status-abort';
        this.tooltip = 'Previous build was aborted.';
        break;

      case ProjectStatus.DISABLED:
        this.icon = 'status_disabled';
        this.variant = 'status-disabled';
        this.tooltip = 'Builds are disabled.';
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
