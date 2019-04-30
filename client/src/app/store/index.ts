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

export interface State {
}

export const reducers: ActionReducerMap<State> = {
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
