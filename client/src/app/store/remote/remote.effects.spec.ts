//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { inject, TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { RemoteEffects } from './remote.effects';

describe('RemoteEffects', () => {
  let actions$: Observable<any>;
  let effects: RemoteEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RemoteEffects,
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.get(RemoteEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
