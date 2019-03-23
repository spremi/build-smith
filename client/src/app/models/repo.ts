//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

/**
 * Supported SCM types.
 */
export class ScmTypes {
  public static readonly GIT = 'git';
}

/**
 * Advanced options for SCM.
 * (May not be used initially, but helps in defining better interface.)
 */
export interface ScmBehaviors {
  /** Create fresh clone before each build. */
  freshClone: boolean;

  /** Fetch tags? */
  fetchTags: boolean;

  /** Ignore changes to specific branches. */
  ignoreBranches: string[];

  /** Ignore changes with specific tags. */
  ignoretags: string[];

  /** Ignore changes from specific users. */
  ignoreUsers: string[];
}

/**
 * Describes source repository used in a project.
 */
export interface SourceRepo {
  /** Type of SCM. */
  type: ScmTypes;

  /** URL to the project repository. */
  url: string;

  /** label to identify the repository. */
  label: string;

  /** Id of the credentials object to be used. */
  credId: string;

  /** Refspec to be used (optional). */
  refspec: string;

  /** Branch(es) to consider (optional). */
  branches: string[];

  /** Advanced behavior options. */
  advanced: ScmBehaviors;
}

/**
 * Initializer for interface 'SourceRepo'.
 */
export const initSourceRepo = (): SourceRepo => ({
  type: ScmTypes.GIT,
  url: null,
  label: '',
  credId: null,
  refspec: null,
  branches: [],
  advanced: null,
});

/**
 * Access status for repository.
 */
export class RepoAccess {
  /** Repo hasn't bee accessed so far. */
  public static readonly NOREQ = 'noreq';

  /** Repo can be accessed. */
  public static readonly PASS = 'pass';

  /** Repo can't be accessed. */
  public static readonly FAIL = 'fail';
}

/**
 * Describes source repository used in a project.
 */
export interface SourceRepoStatus {
  /** Status of recent access to the repository. */
  access: RepoAccess;

  /** Error message, if repo couldn't be accessed. */
  error: string;
}

/**
 * Initializer for interface 'ProjectRepoStatus'.
 */
export const initSourceRepoStatus = (): SourceRepoStatus => ({
  access: RepoAccess.NOREQ,
  error: '',
});


/**
 * Source repository used in the project.
 */
export interface ProjectRepo {
  /** Identifier for the repository. */
  id: string;

  /** Information related to source repository. */
  repo: SourceRepo;

  /** Status of last access to the source repository. */
  status: SourceRepoStatus;
}

/**
 * Initializer for interface 'ProjectRepo'.
 */
export const initProjectRepo = (): ProjectRepo => ({
  id: null,
  repo: initSourceRepo(),
  status: initSourceRepoStatus(),
});
