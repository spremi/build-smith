//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Pipe, PipeTransform } from '@angular/core';
import { UserStatus } from '../models/user';

@Pipe({
  name: 'userStatus',
})
export class UserStatusPipe implements PipeTransform {

  transform(value: string): string {
    let ret: string;

    switch (value) {
      case UserStatus.ACTIVE:
        ret = 'ACTIVE';
        break;

      case UserStatus.INACTIVE:
        ret = 'INACTIVE';
        break;

      case UserStatus.RETIRED:
        ret = 'RETIRED';
        break;

      default:
        ret = null;
    }

    return ret;
  }
}
