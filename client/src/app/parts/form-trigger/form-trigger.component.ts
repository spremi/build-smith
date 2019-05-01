//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'sp-form-trigger',
  templateUrl: './form-trigger.component.html',
  styleUrls: ['./form-trigger.component.sass'],
})
export class FormTriggerComponent implements OnInit {

  /**
   * Form group for trigger.
   */
  triggerForm: FormGroup;

  @Input() edit: boolean;

  constructor(private fb: FormBuilder) {
    this.triggerForm = this.createForm();
  }

  ngOnInit() {
  }

  /**
   * Creates form group based on specified data
   */
  private createForm(): FormGroup {
    return this.fb.group({
      user: [false],
      hook: [false],
      hookToken: [''],
      schedule: [false],
      scheduleCron: [''],
      after: [false],
      afterProjects: [''],
      afterFailure: [false],
    });
  }
}
