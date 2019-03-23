//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

/**
 * Credential types
 */
export class CredentialType {
  /** Simple Username + Password. */
  public static readonly USER_PASS = 'user_pass';

  /** SSH Username with private key. */
  public static readonly SSH_PKEY = 'ssh_pkey';

  /** API Authorization token. */
  public static readonly AUTH_TOKEN = 'auth_token';
}

/**
 * Credential scope
 */
export class CredentialScope {
  /** System - Used in system setup, etc. */
  public static readonly SYSTEM = 'S';

  /** Global - Used across all projects. */
  public static readonly GLOBAL = 'G';

  /** Project - Used in specified project. */
  public static readonly PROJECT = 'P';
}

export interface CredentialSimple {
  /** Username */
  user: string;

  /** Password */
  pass: string;
}

export interface CredentialToken {
  /** Authorization token */
  auth: string;
}

export interface CredentialSshKey {
  /** Username (on remote server) */
  user: string;

  /** Private key. */
  key: string;

  /** Passphrase (if set). */
  pass: string;
}

/**
 * Describes a credential.
 */
export interface Credential {
  /** Identifier */
  id: string;

  /** Label - shown after save. */
  label: string;

  /** Scope of this credential. */
  scope: CredentialScope;

  /** Type credential data. */
  type: CredentialType;

  /** Actual credential data. */
  data: CredentialSimple | CredentialToken | CredentialSshKey;
}

/**
 * Initializer for interface 'Credential'.
 */
export const initCredential = (): Credential => ({
  id: null,
  label: null,
  scope: CredentialScope.PROJECT,
  type: CredentialType.USER_PASS,
  data: null,
});
