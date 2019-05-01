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

  /** Periodically. */
  public static readonly PERIODIC = 'P';

  /** After other project(s). */
  public static readonly AFTER = 'A';
}

/**
 * Describes a trigger.
 */
export interface Trigger {
  /** Type of trigger */
  type: TriggerType;

  /** Hook identifier - if trigger type is 'HOOK'. */
  hook: string;

  /** Cron text defining schedule - if trigger type is 'PERIODIC'. */
  cron: string;

  /** Project identifier - if trigger type is 'AFTER'. */
  project: string;
}

/**
 * Initializer for interface 'Trigger'.
 */
export const initTrigger = (): Trigger => ({
  type: null,
  hook: null,
  cron: null,
  project: null,
});
