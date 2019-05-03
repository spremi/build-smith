//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { ProjectRepo } from './repo';
import { initTriggers, Triggers } from './triggers';

/**
 * Access permissions of a project.
 */
export class ProjectAccess {
  /** Can be viewed by any user. */
  public static readonly PUBLIC = 'P';

  /** Can be viewed by verified users only. */
  public static readonly VERIFIED = 'V';

  /** Can be viewed by specific users only. */
  public static readonly SPECIFIC = 'S';

  /** Can be viewed by admins only. */
  public static readonly ADMIN = 'A';
}

/**
 * Health rating of a project.
 */
export class ProjectHealth {
  /** None of 5 recent builds passed. */
  public static readonly LEVEL0 = 'L0';

  /** 1 of 5 recent builds passed. */
  public static readonly LEVEL1 = 'L1';

  /** 2 of 5 recent builds passed. */
  public static readonly LEVEL2 = 'L2';

  /** 3 of 5 recent builds passed. */
  public static readonly LEVEL3 = 'L3';

  /** 4 of 5 recent builds passed. */
  public static readonly LEVEL4 = 'L4';

  /** All of recent 5 builds passed. */
  public static readonly LEVEL5 = 'L5';
}

/**
 * Status of a project.
 */
export class ProjectStatus {
  /** Never built. */
  public static readonly NEVER = 'never';

  /** Build is in progress. */
  public static readonly ONGOING = 'ongoing';

  /** Previous build was successful. */
  public static readonly SUCCESS = 'success';

  /** Previous build failed. */
  public static readonly FALIURE = 'failure';

  /** Previous build was aborted. */
  public static readonly ABORT = 'abort';

  /** Builds are disabled. */
  public static readonly DISABLED = 'disabled';
}

/**
 * Build related information for a project.
 */
export interface ProjectBuildInfo {
  /** Identifier for latest build. */
  latest: string;

  /** Identifier for last successful build. */
  lastSuccess: string;

  /** Identifier for last failed build. */
  lastFailure: string;

  /** Duration of latest build (in seconds). */
  lastDuration: number;
}

/**
 * Initializer for interface 'ProjectBuildInfo'.
 */
export const initProjectBuildInfo = (): ProjectBuildInfo => ({
  latest: null,
  lastSuccess: null,
  lastFailure: null,
  lastDuration: 0,
});

/**
 * Brief information about a project.
 */
export interface ProjectBrief {
  /** Project identifier. */
  id: string;

  /** Project name. */
  name: string;

  /** Short description. */
  desc: string;

  /** Is project enabled? */
  enabled: boolean;

  /** Project status. */
  status: ProjectStatus;

  /** Project health. */
  health: ProjectHealth;

  /** Build information */
  build: ProjectBuildInfo;
}

/**
 * Initializer for interface 'ProjectBrief'.
 */
export const initProjectBrief = (): ProjectBrief => ({
  id: null,
  name: null,
  desc: null,
  enabled: false,
  status: ProjectStatus.NEVER,
  health: ProjectHealth.LEVEL0,
  build: initProjectBuildInfo(),
});

/**
 * Project permissions.
 */
export interface ProjectPermissions {
  /** Project access. */
  access: ProjectAccess;

  /** List of users with UserRoles.OBSERVER access. */
  viewers: string[];

  /** List of users with UserRoles.BUILDER access. */
  builders: string[];

  /** List of users with UserRoles.ADMIN access. */
  admins: string[];
}

/**
 * Initializer for interface 'ProjectPermissions'.
 */
export const initProjectPermissions = (): ProjectPermissions => ({
  access: ProjectAccess.SPECIFIC,
  viewers: [],
  builders: [],
  admins: [],
});

/**
 * Detailed information about a project.
 */
export interface Project extends ProjectBrief {
  /** Source repositories in the project. */
  repos: ProjectRepo[];

  /** Permissions. */
  perms: ProjectPermissions;

  /** Triggers. */
  triggers: Triggers;
}

/**
 * Initializer for interface 'Project'.
 */
export const initProject = (): Project => ({
  ...initProjectBrief(),
  repos: [],
  perms: initProjectPermissions(),
  triggers: initTriggers(),
});
