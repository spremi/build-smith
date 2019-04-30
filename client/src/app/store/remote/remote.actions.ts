//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Action } from '@ngrx/store';

export enum RemoteActionTypes {
  LoadRemotes = '[Remote] Load Remotes',
}

export class LoadRemotes implements Action {
  readonly type = RemoteActionTypes.LoadRemotes;
}

export type RemoteActions = LoadRemotes;
