//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { CredentialScope } from '../models/credentials';
import { CredScopePipe } from './cred-scope.pipe';

describe('CredScopePipe', () => {
  let pipe: CredScopePipe;

  beforeEach(() => {
    pipe = new CredScopePipe();
  });

  it('transforms CredentialScope.SYSTEM', () => {
    expect(pipe.transform(CredentialScope.SYSTEM)).toBe('SYSTEM');
  });

  it('transforms CredentialScope.GLOBAL', () => {
    expect(pipe.transform(CredentialScope.GLOBAL)).toBe('GLOBAL');
  });

  it('transforms CredentialScope.PROJECT', () => {
    expect(pipe.transform(CredentialScope.PROJECT)).toBe('PROJECT');
  });
});
