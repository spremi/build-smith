//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Component, Input, OnInit } from '@angular/core';
import { DisplayOptions } from 'src/app/models/generic';
import { ProjectHealth } from 'src/app/models/project';

@Component({
  selector: 'sp-project-health',
  templateUrl: './project-health.component.html',
  styleUrls: ['./project-health.component.sass'],
})
export class ProjectHealthComponent implements OnInit {
  /**
   * Project health
   */
  health: ProjectHealth;

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
   * Name of icon - based on value 'health'.
   */
  icon = '';

  /**
   * Style variant to use.
   */
  variant = '';

  @Input()
  set arg(val: ProjectHealth) {
    if (!val) {
      this.health = null;
      return;
    }

    this.health = val;

    switch (val) {
      case ProjectHealth.LEVEL0:
        this.label = 'LEVEL 0';
        this.icon = 'health_l0';
        this.variant = 'health-l0';
        this.tooltip = 'None of 5 recent builds was successful.';
        break;

      case ProjectHealth.LEVEL1:
        this.label = 'LEVEL 1';
        this.icon = 'health_l1';
        this.variant = 'health-l1';
        this.tooltip = 'Only 1 of 5 recent builds was successful.';
        break;

      case ProjectHealth.LEVEL2:
        this.label = 'LEVEL 2';
        this.icon = 'health_l2';
        this.variant = 'health-l2';
        this.tooltip = '2 of 5 recent builds was successful.';
        break;

      case ProjectHealth.LEVEL3:
        this.label = 'LEVEL 3';
        this.icon = 'health_l3';
        this.variant = 'health-l3';
        this.tooltip = '3 of 5 recent builds was successful.';
        break;

      case ProjectHealth.LEVEL4:
        this.label = 'LEVEL 4';
        this.icon = 'health_l4';
        this.variant = 'health-l4';
        this.tooltip = '4 of 5 of recent builds were successful.';
        break;

      case ProjectHealth.LEVEL5:
        this.label = 'LEVEL 5';
        this.icon = 'health_l5';
        this.variant = 'health-l5';
        this.tooltip = 'All of 5 recent builds were successful.';
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
