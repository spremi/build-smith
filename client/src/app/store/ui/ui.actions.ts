//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Action } from '@ngrx/store';

export enum UiActionTypes {
  LoadUis = '[Ui] Load Uis',
}

export class LoadUis implements Action {
  readonly type = UiActionTypes.LoadUis;
}

export type UiActions = LoadUis;
