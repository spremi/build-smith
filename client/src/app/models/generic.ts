//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

/**
 * Pair of Label & Value mostly used with drop-down lists.
 */
export interface LabelValue {
  /** Label displayed. */
  label: string;

  /** Actual value. */
  value: string;
}

/**
 * List of numeric comparisons.
 */
export class NumComparison {
  public static readonly EQ = 'n_eq';
  public static readonly NE = 'n_ne';
  public static readonly LT = 'n_lt';
  public static readonly GT = 'n_gt';
  public static readonly LE = 'n_le';
  public static readonly GE = 'n_ge';
}

/**
 * List of string comparisons.
 */
export class StrComparison {
  public static readonly EQ = 's_equ';
  public static readonly NE = 's_neq';
  public static readonly STARTS = 's_stt';
  public static readonly ENDS = 's_end';
  public static readonly CONTAINS = 's_con';
  public static readonly MATCHES = 's_mat';
}

/**
 * List of numeric compare options.
 */
export const NumCompareOptions: LabelValue[] = [
  {
    label: 'Equals (Numeric)',
    value: NumComparison.EQ,
  },
  {
    label: 'Not Equals (Numeric)',
    value: NumComparison.NE,
  },
  {
    label: 'Less than',
    value: NumComparison.LT,
  },
  {
    label: 'Greated than',
    value: NumComparison.GT,
  },
  {
    label: 'Less than or equal',
    value: NumComparison.LE,
  },
  {
    label: 'Greated than or equal',
    value: NumComparison.GE,
  },
];

/**
 * List of numeric compare options.
 */
export const StrCompareOptions: LabelValue[] = [
  {
    label: 'Equals (String)',
    value: StrComparison.EQ,
  },
  {
    label: 'Not Equals (String)',
    value: StrComparison.NE,
  },
  {
    label: 'Starts with',
    value: StrComparison.STARTS,
  },
  {
    label: 'Ends with',
    value: StrComparison.ENDS,
  },
  {
    label: 'Contains',
    value: StrComparison.CONTAINS,
  },
  {
    label: 'Matches',
    value: StrComparison.MATCHES,
  },
];


/**
 * Describe a condition.
 */
export interface Condition {
  /** First variable / expression. */
  a: string;

  /** Second variable /expression. */
  b: string;

  /** Type of comparison */
  comparison: NumComparison | StrComparison;

  /** Is string comparison case-sensitive? */
  case: boolean;
}

/**
 * Initializer for interface 'Condition'.
 */
export const initCondition = (): Condition => ({
  a: null,
  b: null,
  comparison: StrComparison.EQ,
  case: true,
});

/**
 * List of display options for components.
 */
export class DisplayOptions {
  public static readonly TEXT = 'text';
  public static readonly ICON = 'icon';
  public static readonly TOOLTIP = 'tooltip';
}
