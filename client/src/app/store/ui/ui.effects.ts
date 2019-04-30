//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Injectable } from '@angular/core';
import { ofType, Actions, Effect } from '@ngrx/effects';

import { EMPTY } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { UiActions, UiActionTypes } from './ui.actions';

@Injectable()
export class UiEffects {

  @Effect()
  loadUis$ = this.actions$.pipe(
    ofType(UiActionTypes.LoadUis),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY)
  );

  constructor(private actions$: Actions<UiActions>) { }
}
