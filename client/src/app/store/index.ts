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
import * as fromRemote from './remote/remote.reducer';
import * as fromUser from './user/user.reducer';

export interface State {
  user: fromUser.State;
  remote: fromRemote.State;
}

export const reducers: ActionReducerMap<State> = {
  user: fromUser.reducer,
  remote: fromRemote.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
