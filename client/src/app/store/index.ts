//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import {
  createFeatureSelector,
  createSelector,
  ActionReducer,
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromAuth from './auth/auth.reducer';
import * as fromBuild from './build/build.reducer';
import * as fromProject from './project/project.reducer';
import * as fromRemote from './remote/remote.reducer';
import * as fromUi from './ui/ui.reducer';
import * as fromUser from './user/user.reducer';

export interface State {
  user: fromUser.State;
  remote: fromRemote.State;
  project: fromProject.State;
  build: fromBuild.State;
  ui: fromUi.State;
  auth: fromAuth.State;
}

export const reducers: ActionReducerMap<State> = {
  user: fromUser.reducer,
  remote: fromRemote.reducer,
  project: fromProject.reducer,
  build: fromBuild.reducer,
  ui: fromUi.reducer,
  auth: fromAuth.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
