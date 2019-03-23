//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Protocols } from './protocols';

/**
 * Permissions to invoke hooks from remote servers.
 */
export class HookAccess {
  /** Accept request from 'whitelist' server(s). */
  public static readonly ALLOW = 'allow';

  /** Block request from 'blacklist' server(s). */
  public static readonly BLOCK = 'block';

  /** Temporarily reject request from unknown server(s). */
  public static readonly UNKNOWN = 'unknown';
}

/**
 * Describes a remote server for incoming hooks.
 */
export interface RemoteServer {
  id: string;
  hostName: string;
  hostIp: string;
  access: HookAccess;
}

/**
 * Initializer for interface 'RemoteServer'.
 */
export const initRemoteServer = (): RemoteServer => ({
  id: null,
  hostName: null,
  hostIp: null,
  access: HookAccess.UNKNOWN,
});
