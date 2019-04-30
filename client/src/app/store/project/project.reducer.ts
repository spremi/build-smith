//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { ProjectActions, ProjectActionTypes } from './project.actions';

export interface State {
}

export const initialState: State = {
};

export function reducer(state = initialState, action: ProjectActions): State {
  switch (action.type) {

    case ProjectActionTypes.LoadProjects:
      return state;

    default:
      return state;
  }
}
