//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Pipe, PipeTransform } from '@angular/core';
import { CredentialType } from '../models/credentials';

@Pipe({
  name: 'credType',
})
export class CredTypePipe implements PipeTransform {

  transform(value: string): string {
    let ret: string;

    switch (value) {
      case CredentialType.USER_PASS:
        ret = 'USER + PASS';
        break;

      case CredentialType.SSH_PKEY:
        ret = 'SSH + PKEY';
        break;

      case CredentialType.AUTH_TOKEN:
        ret = 'AUTH TOKEN';
        break;

      default:
        ret = null;
    }

    return ret;
  }
}
