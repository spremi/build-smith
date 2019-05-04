//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

/**
 * Describes project workspace.
 */
export interface Workspace {
  /** Workspace directory (from System Config) - Read-Only */
  dir: string;

  /** Build directory (under workspace) - Read-Only */
  buildDir: string;

  /** Record directory (under workspace) - Read-Only */
  recordDir: string;

  /** Clean before build? */
  cleanBefore: boolean;

  /** Clean after build? */
  cleanAfter: boolean;

  /** Number of builds to keep */
  buildCount: number;
}

/**
 * Initializer for interface 'Workspace'.
 */
export const initWorkspace = (): Workspace => ({
  dir: null,
  buildDir: null,
  recordDir: null,
  cleanBefore: false,
  cleanAfter: false,
  buildCount: 0,
});
