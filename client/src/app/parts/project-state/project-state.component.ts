//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Component, Input, OnInit } from '@angular/core';
import { DisplayOptions } from 'src/app/models/generic';

@Component({
  selector: 'sp-project-state',
  templateUrl: './project-state.component.html',
  styleUrls: ['./project-state.component.sass'],
})
export class ProjectStateComponent implements OnInit {
  /**
   * Project state
   */
  state: boolean;

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
  set arg(flag: boolean) {
    if (flag) {
      this.state = true;
      this.icon = 'state_enabled';
      this.variant = 'state-enabled';
      this.tooltip = 'Project is enabled.';
    } else {
      this.state = false;
      this.icon = 'state_disabled';
      this.variant = 'state-disabled';
      this.tooltip = 'Project is disabled.';
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
