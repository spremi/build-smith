//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Credential } from './credentials';

/**
 * Different roles of the user.
 */
export class UserRole {
  /** Can view summary build information, based on project permissions. */
  public static readonly VIEWER = 'V';

  /** Can build projects, based on project permissions. */
  public static readonly BUILDER = 'B';

  /** Can administer projects, based on project permissions. */
  public static readonly PROJADMIN = 'P';

  /** Can administer the application. */
  public static readonly SYSADMIN = 'A';
}

/**
 * List user permisions.
 */
export class UserPermission {
  /** User is denied access to the resource. */
  public static readonly DENY = 'deny';

  /** User is granted access to the resource. */
  public static readonly GRANT = 'grant';
}

/**
 * Different status the user.
 */
export class UserStatus {
  /** User is active. */
  public static readonly ACTIVE = 'A';

  /** User is inactive (e.g. incorrect login attempts). */
  public static readonly INACTIVE = 'I';

  /** User is retired (e.g. no longer part of organization). */
  public static readonly RETIRED = 'R';
}

/**
 * Brief information about a user.
 */
export interface UserBrief {
  /** Identifier for the user. */
  id: string;

  /** Status of the user. */
  status: UserStatus;

  /** Short name to identify the user. */
  userName: string;

  /** User's full name. */
  fullName: string;

  /** User's role. */
  role: UserRole;
}

/**
 * Describes a user.
 */
export interface User extends UserBrief {
  /** Personal credentials, if any. */
  credentials: Credential[];
}

/**
 * Initializer for interface 'UserBrief'.
 */
export const initUserBrief = (): UserBrief => ({
  id: null,
  status: UserStatus.INACTIVE,
  userName: null,
  fullName: null,
  role: UserRole.VIEWER,
});

/**
 * Initializer for interface 'User'.
 */
export const initUser = (): User => ({
  id: null,
  status: UserStatus.INACTIVE,
  userName: null,
  fullName: null,
  role: UserRole.VIEWER,
  credentials: null,
});
