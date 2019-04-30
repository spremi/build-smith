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

import { BuildEffects } from './build.effects';

describe('BuildEffects', () => {
  let actions$: Observable<any>;
  let effects: BuildEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BuildEffects,
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.get(BuildEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
