//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { LabelValue } from './generic';

/**
 * List of protocols.
 */
export class Protocols {
  public static readonly HTTP = 'http';
  public static readonly HTTPS = 'https';
  public static readonly GIT = 'git';
  public static readonly SSH = 'ssh';
  public static readonly GIT_SSH = 'git+ssh';
}

/**
 * List of protocol options.
 */
export const ProtocolOptions: LabelValue[] = [
  {
    label: 'HTTP',
    value: Protocols.HTTP,
  },
  {
    label: 'HTTPS',
    value: Protocols.HTTPS,
  },
  {
    label: 'SSH',
    value: Protocols.SSH,
  },
  {
    label: 'GIT',
    value: Protocols.GIT,
  },
  {
    label: 'GIT+SSH',
    value: Protocols.GIT_SSH,
  },
];
