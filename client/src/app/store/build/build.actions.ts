//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Action } from '@ngrx/store';

export enum BuildActionTypes {
  LoadBuilds = '[Build] Load Builds',
}

export class LoadBuilds implements Action {
  readonly type = BuildActionTypes.LoadBuilds;
}

export type BuildActions = LoadBuilds;
