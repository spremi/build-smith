//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { CredScopePipe } from './cred-scope.pipe';

describe('CredScopePipe', () => {
  it('create an instance', () => {
    const pipe = new CredScopePipe();
    expect(pipe).toBeTruthy();
  });
});
