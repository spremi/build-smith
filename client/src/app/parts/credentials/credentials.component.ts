//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Credential, CredentialScope, CredentialType } from 'src/app/models/credentials';
import { LabelValue } from 'src/app/models/generic';

@Component({
  selector: 'sp-credentials',
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.sass'],
})
export class CredentialsComponent implements OnInit {
  /**
   * List of options for credential type.
   */
  readonly TypeOpts: LabelValue[] = [
    {
      label: 'Basic Username + password',
      value: CredentialType.USER_PASS,
    },
    {
      label: 'SSH Username + Private key',
      value: CredentialType.SSH_PKEY,
    },
    {
      label: 'Authorization Token',
      value: CredentialType.AUTH_TOKEN,
    },
  ];

  /**
   * List of options for credential scope.
   */
  readonly ScopeOpts: LabelValue[] = [
    {
      label: 'SYSTEM',
      value: CredentialScope.SYSTEM,
    },
    {
      label: 'GLOBAL',
      value: CredentialScope.GLOBAL,
    },
    {
      label: 'PROJECT',
      value: CredentialScope.PROJECT,
    },
  ];

  /**
   * Array of credentials.
   */
  @Input() credentials: FormArray;

  /**
   * Is user editing the form?
   */
  @Input() isEditing = false;

  /**
   * Form group for this component.
   */
  credForm: FormGroup;

  /**
   * Is mouse hovering on credentials element?
   */
  isHovered: boolean[] = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.credForm = this.fb.group({
      credentials: this.credentials,
    });
  }

  /**
   * Getter for credentials forms.
   */
  get credForms(): FormArray {
    return this.credForm.get('credentials') as FormArray;
  }

  /**
   * Add new credentials.
   */
  add() {
    this.credForms.push(this.fb.group({
      id: '',
      label: '',
      type: CredentialType.USER_PASS,
      scope: CredentialScope.PROJECT,
      data: this.fb.group({
        user: '',
        pass: '',
      }),
    }));
  }

  /**
   * Delete credentials at specfied index.
   */
  delete(i: number) {
    this.credForms.removeAt(i);
  }
}
