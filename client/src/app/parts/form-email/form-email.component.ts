//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { forwardRef, Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { EmailNotification } from 'src/app/models/notifications';

@Component({
  selector: 'sp-form-email',
  templateUrl: './form-email.component.html',
  styleUrls: ['./form-email.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormEmailComponent),
      multi: true,
    },
  ],
})
export class FormEmailComponent implements OnInit, ControlValueAccessor {
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

  onTouched: () => void = () => { };

  ngOnInit() {
    this.emailForm = this.createForm();
  }

  /**
   * Write new value.
   * @param val New value
   */
  writeValue(val: EmailNotification): void {
    if (val) {
      this.emailForm.setValue({
        to: val.to,
        cc: val.cc,
        bcc: val.bcc,
        subject: val.subject,
        body: val.body,
        header: val.header,
        footer: val.footer,
      },
        {
          emitEvent: true,
        });

      this.showBcc = !!val.bcc;
      this.showHeader = !!val.header;
      this.showFooter = !!val.footer;
    }
  }

  /**
   * Registers callback function for value changes in the UI.
   */
  registerOnChange(fn: any): void {
    this.emailForm.valueChanges.subscribe(fn);
  }

  /**
   * Registers callback function for 'blur' event.
   */
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  /**
   * Called when the form is (enabled or) disabled.
   */
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.emailForm.disable() : this.emailForm.enable();
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
