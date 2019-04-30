//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { BuildActions, BuildActionTypes } from './build.actions';

export interface State {
}

export const initialState: State = {
};

export function reducer(state = initialState, action: BuildActions): State {
  switch (action.type) {

    case BuildActionTypes.LoadBuilds:
      return state;

    default:
      return state;
  }
}
