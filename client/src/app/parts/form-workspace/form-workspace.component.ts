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
import { Workspace } from 'src/app/models/workspace';

@Component({
  selector: 'sp-form-workspace',
  templateUrl: './form-workspace.component.html',
  styleUrls: ['./form-workspace.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormWorkspaceComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => FormWorkspaceComponent),
      multi: true,
    },
  ],
})
export class FormWorkspaceComponent implements OnInit, ControlValueAccessor, Validator {
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

  onTouched: () => void = () => { };

  ngOnInit() {
    this.workspaceForm = this.createForm();
  }

  /**
   * Write new value.
   * @param val New value
   */
  writeValue(val: Workspace): void {
    if (val) {
      this.workspaceForm.setValue({
        workspaceDir: val.dir,
        buildDir: val.buildDir,
        recordDir: val.recordDir,
        cleanBefore: val.cleanBefore,
        cleanAfter: val.cleanAfter,
        buildCount: val.buildCount === 0 ? '' : val.buildCount,
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
    this.workspaceForm.valueChanges.subscribe(fn);
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
    isDisabled ? this.workspaceForm.disable() : this.workspaceForm.enable();
  }

  /**
   * Validates the form content.
   */
  validate(c: AbstractControl): ValidationErrors | null {

    let err: { [key: string]: boolean };

    const valBuildCount = this.workspaceForm.get(['buildCount']);

    if (valBuildCount.value && !valBuildCount.pristine) {
      const countStr = (valBuildCount.value as string).trim();

      if (countStr === '') {
        return null;
      }

      const buildCount = parseInt(countStr, 10);
      if (isNaN(buildCount)) {
        err = { errNumber: true };

        valBuildCount.setErrors(err);
        return err;
      }

      if (buildCount < 1) {
        err = { errRange: true };

        valBuildCount.setErrors(err);
        return err;
      }

      if (buildCount > this.maxBuilds) {
        err = { errRange: true };

        valBuildCount.setErrors(err);
        return err;
      }
    }

    return null;
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
