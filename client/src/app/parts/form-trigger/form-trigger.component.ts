//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { forwardRef, Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
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
  ],
})
export class FormTriggerComponent implements OnInit, ControlValueAccessor {
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
