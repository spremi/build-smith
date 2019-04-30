//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Action } from '@ngrx/store';

export enum UserActionTypes {
  LoadUsers = '[User] Load Users',
}

export class LoadUsers implements Action {
  readonly type = UserActionTypes.LoadUsers;
}

export type UserActions = LoadUsers;
