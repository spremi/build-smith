//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Condition } from './generic';

/**
 * Supported step types.
 */
export class StepTypes {
  /** Shell command/ script. */
  public static readonly SHELL = 'shell';
}

/**
 * Source of step.
 */
export class StepSource {
  /** Details of step are available inline. */
  public static readonly INLINE = 'inline';

  /** Details of step are read from file. */
  public static readonly FILE = 'file';
}

/**
 * Step to execute shell command/ script.
 */
export interface ShellStep {
  /** Source of shell command/ script */
  source: StepSource;

  /** Inline command / script (when source == StepSource.INLINE). */
  inline: string;

  /**
   * Path to shell script (when source == StepSource.FILE).
   * The path must be is relative to the project root.
   */
  file: string;
}

/**
 * Simple step.
 */
export interface SimpleStep {
  /** Identifier for the step */
  id: string;

  /** Step information  */
  step: ShellStep;
}

/**
 * Conditional step.
 */
export interface ConditionalStep {
  /** Identifier for the step */
  id: string;

  /** Condition to check before executing the step. */
  condition: Condition;

  /** Step information  */
  step: ShellStep;
}
