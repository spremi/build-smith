//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

/**
 * Different triggers
 */
export class TriggerType {
  /** On user action. */
  public static readonly USER = 'U';

  /** On receiving web-hook. */
  public static readonly HOOK = 'H';

  /** Per schedule. */
  public static readonly SCHEDULE = 'S';

  /** After other project(s). */
  public static readonly AFTER = 'A';
}

/**
 * Describes attributes of hook trigger.
 */
export interface HookTrigger {
  /** Token required to trigger builds. */
  token: string;
}

/**
 * Describes attributes of schedule trigger.
 */
export interface ScheduleTrigger {
  /** Cron text defining schedule. */
  cron: string;
}

/**
 * Describes attributes of 'after' trigger.
 */
export interface AfterTrigger {
  /** List of project identifiers. */
  projects: string[];

  /** Trigger, even if the build failed. */
  onFailure: boolean;
}

/**
 * Describes a set of triggers.
 */
export interface Triggers {
  /** On user action? */
  user: boolean;

  /** On receiving web-hook? */
  hook: boolean;

  /** Attributes of HOOK trigger. */
  hookAttrs: HookTrigger;

  /** Per schedule? */
  schedule: boolean;

  /** Attributes of SCHEDULE trigger. */
  schedAttrs: ScheduleTrigger;

  /** After other project(s)? */
  after: boolean;

  /** Attributes of AFTER trigger. */
  afterAttrs: AfterTrigger;
}

/**
 * Initializer for interface 'Trigger'.
 */
export const initTriggers = (): Triggers => ({
  user: false,
  hook: false,
  hookAttrs: null,
  schedule: false,
  schedAttrs: null,
  after: false,
  afterAttrs: null,
});
