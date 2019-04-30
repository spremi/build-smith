//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Action } from '@ngrx/store';

export enum ProjectActionTypes {
  LoadProjects = '[Project] Load Projects',
}

export class LoadProjects implements Action {
  readonly type = ProjectActionTypes.LoadProjects;
}

export type ProjectActions = LoadProjects;
