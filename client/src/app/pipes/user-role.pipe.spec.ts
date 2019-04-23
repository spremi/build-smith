//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { UserRolePipe } from './user-role.pipe';

describe('UserRolePipe', () => {
  it('create an instance', () => {
    const pipe = new UserRolePipe();
    expect(pipe).toBeTruthy();
  });
});
