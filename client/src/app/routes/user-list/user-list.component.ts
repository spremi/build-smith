//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { UserBrief, UserRole, UserStatus } from 'src/app/models/user';

@Component({
  selector: 'sp-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass'],
})
export class UserListComponent implements OnInit {

  /**
   * Dummy build list
   */
  public users: UserBrief[] = [
    {
      id: 'u0',
      status: UserStatus.ACTIVE,
      role: UserRole.SYSADMIN,
      userName: 'user0',
      fullName: 'User Zero',
    },
    {
      id: 'u1',
      status: UserStatus.ACTIVE,
      role: UserRole.PROJADMIN,
      userName: 'user1',
      fullName: 'User One',
    },
    {
      id: 'u2',
      status: UserStatus.INACTIVE,
      role: UserRole.BUILDER,
      userName: 'user2',
      fullName: 'User Two',
    },
    {
      id: 'u3',
      status: UserStatus.ACTIVE,
      role: UserRole.VIEWER,
      userName: 'user3',
      fullName: 'User Three',
    },
    {
      id: 'u4',
      status: UserStatus.RETIRED,
      role: UserRole.VIEWER,
      userName: 'user4',
      fullName: 'User Four',
    },
  ];

  /**
   * Columns to display
   */
  public displayCols: string[] = [
    'status',
    'uname',
    'fname',
    'role',
    'action',
  ];

  /**
   * Data source for the table.
   */
  public dataSource = new MatTableDataSource(this.users);

  @ViewChild(MatSort) sort: MatSort;

  constructor(private router: Router) { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onRowClick(id: string) {
    console.log('clicked: row ' + id);
  }
}
