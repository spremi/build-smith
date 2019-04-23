//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { UserStatus } from '../models/user';
import { UserStatusPipe } from './user-status.pipe';

describe('UserStatusPipe', () => {
  let pipe: UserStatusPipe;

  beforeEach(() => {
    pipe = new UserStatusPipe();
  });

  it('transforms UserStatus.ACTIVE', () => {
    expect(pipe.transform(UserStatus.ACTIVE)).toBe('ACTIVE');
  });

  it('transforms UserStatus.INACTIVE', () => {
    expect(pipe.transform(UserStatus.INACTIVE)).toBe('INACTIVE');
  });

  it('transforms UserStatus.ACTIVE', () => {
    expect(pipe.transform(UserStatus.RETIRED)).toBe('RETIRED');
  });
});
