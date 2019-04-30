//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { UiActions, UiActionTypes } from './ui.actions';

export interface State {
}

export const initialState: State = {
};

export function reducer(state = initialState, action: UiActions): State {
  switch (action.type) {

    case UiActionTypes.LoadUis:
      return state;

    default:
      return state;
  }
}
