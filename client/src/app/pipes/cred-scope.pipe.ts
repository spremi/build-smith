//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Pipe, PipeTransform } from '@angular/core';
import { CredentialScope } from '../models/credentials';

@Pipe({
  name: 'credScope',
})
export class CredScopePipe implements PipeTransform {

  transform(value: string): string {
    let ret: string;

    switch (value) {
      case CredentialScope.SYSTEM:
        ret = 'SYSTEM';
        break;

      case CredentialScope.GLOBAL:
        ret = 'GLOBAL';
        break;

      case CredentialScope.PROJECT:
        ret = 'PROJECT';
        break;

      default:
        ret = null;
    }

    return ret;
  }
}
