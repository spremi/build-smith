//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { UserActions, UserActionTypes } from './user.actions';

export interface State {
}

export const initialState: State = {
};

export function reducer(state = initialState, action: UserActions): State {
  switch (action.type) {

    case UserActionTypes.LoadUsers:
      return state;

    default:
      return state;
  }
}
