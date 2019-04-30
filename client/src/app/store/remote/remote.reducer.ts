//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { RemoteActions, RemoteActionTypes } from './remote.actions';

export interface State {
}

export const initialState: State = {
};

export function reducer(state = initialState, action: RemoteActions): State {
  switch (action.type) {

    case RemoteActionTypes.LoadRemotes:
      return state;

    default:
      return state;
  }
}
