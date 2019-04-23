//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Pipe, PipeTransform } from '@angular/core';
import { UserRole } from '../models/user';

@Pipe({
  name: 'userRole',
})
export class UserRolePipe implements PipeTransform {

  transform(value: string): string {
    let ret: string;

    switch (value) {
      case UserRole.VIEWER:
        ret = 'VIEWER';
        break;

      case UserRole.BUILDER:
        ret = 'BUILDER';
        break;

      case UserRole.PROJADMIN:
        ret = 'PROJECT ADMIN';
        break;

      case UserRole.SYSADMIN:
        ret = 'SYSTEM ADMIN';
        break;

      default:
        ret = null;
    }

    return ret;
  }
}
