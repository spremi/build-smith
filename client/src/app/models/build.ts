//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

/**
 * Different means for triggering a build.
 */
export class BuildTrigger {
  /** Build was started manually. */
  public static readonly MANUAL = 'manual';

  /** Build was started per schedule. */
  public static readonly SCHEDULE = 'scheduled';

  /** Build was started by remote API call. */
  public static readonly HOOK = 'hook';

  /** Build was started due to build chain. */
  public static readonly CHAIN = 'chain';
}

/**
 * Status of a build.
 */
export class BuildStatus {
  /** Build is in progress. */
  public static readonly ONGOING = 'ongoing';

  /** Previous build was successful. */
  public static readonly SUCCESS = 'success';

  /** Previous build failed. */
  public static readonly FAILURE = 'failure';

  /** Previous build was aborted */
  public static readonly ABORT = 'abort';
}

/**
 * Describes a build.
 */
export interface Build {
  /** Build identifier. */
  id: string;

  /** Project identifier. */
  pid: string;

  /** Build status. */
  status: BuildStatus;

  /** Event that trigerred the build. */
  trigger: BuildTrigger;

  /** Time - when build was started. */
  startTime: string;

  /** Time - when build ended. */
  endTime: string;
}

/**
 * Initializer for interface 'Build'.
 */
export const initBuild = (): Build => ({
  id: null,
  pid: null,
  status: BuildStatus.ABORT,
  trigger: BuildTrigger.MANUAL,
  startTime: null,
  endTime: null,
});
