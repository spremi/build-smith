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
  selector: 'sp-form-workspace',
  templateUrl: './form-workspace.component.html',
  styleUrls: ['./form-workspace.component.sass'],
})
export class FormWorkspaceComponent implements OnInit {
  /**
   * Form group for workspace.
   */
  workspaceForm: FormGroup;

  /**
   * Maximum number of builds to keep.
   * TODO: Fetch from global configuration.
   */
  maxBuilds = 8;

  @Input() edit: boolean;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.workspaceForm = this.createForm();
  }

  /**
   * Creates form group based on specified data.
   */
  private createForm(): FormGroup {
    return this.fb.group({
      workspaceDir: [''],
      buildDir: [''],
      recordDir: [''],
      cleanBefore: [false],
      cleanAfter: [false],
      buildCount: [this.maxBuilds, { updateOn: 'blur' }],
    });
  }
}
