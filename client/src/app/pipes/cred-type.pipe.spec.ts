//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { CredentialType } from '../models/credentials';
import { CredTypePipe } from './cred-type.pipe';

describe('CredTypePipe', () => {
  let pipe: CredTypePipe;

  beforeEach(() => {
    pipe = new CredTypePipe();
  });

  it('transforms CredentialType.USER_PASS', () => {
    expect(pipe.transform(CredentialType.USER_PASS)).toBe('USER + PASS');
  });

  it('transforms CredentialType.USER_PASS', () => {
    expect(pipe.transform(CredentialType.SSH_PKEY)).toBe('SSH + PKEY');
  });

  it('transforms CredentialType.USER_PASS', () => {
    expect(pipe.transform(CredentialType.AUTH_TOKEN)).toBe('AUTH TOKEN');
  });
});
