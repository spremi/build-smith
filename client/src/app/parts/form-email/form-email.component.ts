//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { forwardRef, Component, Input, OnInit } from '@angular/core';
import {
  AbstractControl, ControlValueAccessor, FormBuilder, FormGroup,
  NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, Validators,
} from '@angular/forms';
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
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => FormEmailComponent),
      multi: true,
    },
  ],
})
export class FormEmailComponent implements OnInit, ControlValueAccessor, Validator {
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
   * Validates the form content.
   */
  validate(c: AbstractControl): ValidationErrors | null {
    let err: { [key: string]: boolean };

    const valTo = this.emailForm.get(['to']);
    const valCc = this.emailForm.get(['cc']);
    const valBcc = this.emailForm.get(['bcc']);

    //
    // Either of 'to', 'cc' or 'bcc' (if enabled), must be set
    //
    const strTo = (valTo.value as string).trim();
    const strCc = (valCc.value as string).trim();
    const strBcc = (valBcc.value as string).trim();

    if (this.showBcc) {
      if (!strTo && !strCc && !strBcc) {
        err = { errAddress: true };

        valTo.setErrors(err);
        valCc.setErrors(err);
        valBcc.setErrors(err);
        return err;
      }
    } else {
      if (!strTo && !strCc) {
        err = { errAddress: true };

        valTo.setErrors(err);
        valCc.setErrors(err);
        return err;
      }
    }

    //
    // Clear any previously set error(s).
    //
    valTo.setErrors(null);
    valCc.setErrors(null);

    if (this.showBcc) {
      valBcc.setErrors(null);
    }

    // TODO: Validate as array of email addresses

    const valSubject = this.emailForm.get(['subject']);

    if (!(valSubject.value as string).trim()) {
      err = { errEmpty: true };

      valSubject.setErrors(err);
      return err;
    }

    const valBody = this.emailForm.get(['body']);

    if (!(valBody.value as string).trim()) {
      err = { errEmpty: true };

      valBody.setErrors(err);
      return err;
    }

    return null;
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
