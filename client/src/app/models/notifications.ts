//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

/**
 * Describes an email notification.
 */
export interface EmailNotification {
  /** Main recipients(s) of the email. */
  to: string;

  /** Recipients(s) in Cc: list of the email. */
  cc: string;

  /** Recipients(s) in Bcc: list of the email. */
  bcc: string;

  /** Subject of the email */
  subject: string;

  /** Header content of the email, if any. */
  header: string;

  /** Footer content of the email, if any. */
  footer: string;

  /** Main body of the email. */
  body: string;
}

/**
 * Initializer for interface 'EmailNotification'.
 */
export const initEmailNotification = (): EmailNotification => ({
  to: null,
  cc: null,
  bcc: null,
  subject: null,
  header: null,
  footer: null,
  body: null,
});
