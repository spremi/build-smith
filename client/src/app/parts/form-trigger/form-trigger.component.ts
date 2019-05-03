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
  NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator,
} from '@angular/forms';
import { Triggers } from 'src/app/models/triggers';

@Component({
  selector: 'sp-form-trigger',
  templateUrl: './form-trigger.component.html',
  styleUrls: ['./form-trigger.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormTriggerComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => FormTriggerComponent),
      multi: true,
    },
  ],
})
export class FormTriggerComponent implements OnInit, ControlValueAccessor, Validator {
  /**
   * Form group for trigger.
   */
  triggerForm: FormGroup;

  @Input() edit: boolean;

  constructor(private fb: FormBuilder) {
  }

  onTouched: () => void = () => { };

  ngOnInit() {
    this.triggerForm = this.createForm();
  }

  /**
   * Write new value.
   * @param val Write new value
   */
  writeValue(val: Triggers): void {
    if (val) {
      this.triggerForm.setValue({
        user: val.user,
        hook: val.hook,
        hookToken: val.hookAttrs.token,
        schedule: val.schedule,
        scheduleCron: val.schedAttrs.cron,
        after: val.after,
        afterProjects: val.afterAttrs.projects,
        afterFailure: val.afterAttrs.onFailure,
      },
        {
          emitEvent: false,
        });
    }
  }

  /**
   * Registers callback function for value changes in the UI.
   */
  registerOnChange(fn: any): void {
    this.triggerForm.valueChanges.subscribe(fn);
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
    isDisabled ? this.triggerForm.disable() : this.triggerForm.enable();
  }

  /**
   * Validates the form content.
   */
  validate(c: AbstractControl): ValidationErrors | null {

    let err: { [key: string]: boolean };

    const valUser = this.triggerForm.get(['user']);
    const valHook = this.triggerForm.get(['hook']);
    const valHookToken = this.triggerForm.get(['hookToken']);
    const valSchedule = this.triggerForm.get('schedule');
    const valScheduleCron = this.triggerForm.get('scheduleCron');
    const valAfter = this.triggerForm.get('after');
    const valAfterProjects = this.triggerForm.get('afterProjects');

    //
    // Atleast one of trigger mechanisms must be set.
    //
    if (!valUser.value &&
      !valHook.value &&
      !valSchedule.value &&
      !valAfter.value) {
      return { errTrigger: true };
    }

    //
    // Trigger web-hook is selected & authorization token is modified.
    //
    if (valHook.value && !valHookToken.pristine) {
      const token = (valHookToken.value as string).trim();

      if (token.length === 0) {
        err = { errToken: true };

        valHookToken.setErrors(err);
        return err;
      } else {
        if (token.length < 4) {
          err = { errTokenLen: true };

          valHookToken.setErrors(err);
          return err;
        }
      }
    }

    //
    // Trigger 'schedule' is selected & cron text is modified.
    //
    if (valSchedule.value && !valScheduleCron.pristine) {
      const cron = (valScheduleCron.value as string).trim();

      if (cron.length === 0) {
        err = { errCron: true };

        valScheduleCron.setErrors(err);
        return err;
      } else {
        // TODO: Validate the cron string
      }
    }

    //
    // Trigger 'after' is selected & project list is modified.
    //
    if (valAfter.value && !valAfterProjects.pristine) {
      const projects = (valAfterProjects.value as string).trim();

      if (projects.length === 0) {
        err = { errProjects: true };

        valAfterProjects.setErrors(err);
        return err;
      } else {
        // TODO: Validate the project names
      }
    }

    return null;
  }

  /**
   * Creates form group based on specified data
   */
  private createForm(): FormGroup {
    return this.fb.group({
      user: [false],
      hook: [false],
      hookToken: ['', { updateOn: 'blur' }],
      schedule: [false],
      scheduleCron: ['', { updateOn: 'blur' }],
      after: [false],
      afterProjects: ['', { updateOn: 'blur' }],
      afterFailure: [false],
    });
  }
}
