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
  selector: 'sp-form-email',
  templateUrl: './form-email.component.html',
  styleUrls: ['./form-email.component.sass'],
})
export class FormEmailComponent implements OnInit {
  /**
   * Form group for email component.
   */
  emailForm: FormGroup;

  /**
   * Show bcc?
   */
  showBcc = false;

  /**
   * Show email header?
   */
  showHeader = false;

  /**
   * Show email footer?
   */
  showFooter = false;

  @Input() edit: boolean;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.emailForm = this.createForm();
  }

  /**
   * Creates form group based on specified data.
   */
  private createForm(): FormGroup {
    return this.fb.group({
      to: ['', { updateOn: 'blur' }],
      cc: ['', { updateOn: 'blur' }],
      bcc: ['', { updateOn: 'blur' }],
      subject: ['', { updateOn: 'blur' }],
      body: ['', { updateOn: 'blur' }],
      header: ['', { updateOn: 'blur' }],
      footer: ['', { updateOn: 'blur' }],
    });
  }
}
