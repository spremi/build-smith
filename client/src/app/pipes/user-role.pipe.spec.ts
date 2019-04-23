//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { UserRole } from '../models/user';
import { UserRolePipe } from './user-role.pipe';

describe('UserRolePipe', () => {
  let pipe: UserRolePipe;

  beforeEach(() => {
    pipe = new UserRolePipe();
  });

  it('transforms UserRole.VIEWER', () => {
    expect(pipe.transform(UserRole.VIEWER)).toBe('VIEWER');
  });

  it('transforms UserRole.BUILDER', () => {
    expect(pipe.transform(UserRole.BUILDER)).toBe('BUILDER');
  });

  it('transforms UserRole.PROJADMIN', () => {
    expect(pipe.transform(UserRole.PROJADMIN)).toBe('PROJECT ADMIN');
  });

  it('transforms UserRole.SYSADMIN', () => {
    expect(pipe.transform(UserRole.SYSADMIN)).toBe('SYSTEM ADMIN');
  });
});
