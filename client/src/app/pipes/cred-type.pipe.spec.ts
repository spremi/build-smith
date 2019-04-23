//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { CredTypePipe } from './cred-type.pipe';

describe('CredTypePipe', () => {
  it('create an instance', () => {
    const pipe = new CredTypePipe();
    expect(pipe).toBeTruthy();
  });
});
