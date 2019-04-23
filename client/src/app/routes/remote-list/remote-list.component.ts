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

import { HookAccess, RemoteServer } from 'src/app/models/remote';

@Component({
  selector: 'sp-remote-list',
  templateUrl: './remote-list.component.html',
  styleUrls: ['./remote-list.component.sass'],
})
export class RemoteListComponent implements OnInit {
  /**
   * Dummy remote list
   */
  public remotes: RemoteServer[] = [
    {
      id: '1',
      hostName: 'remote1.some.whe.re',
      hostIp: '192.168.200.201',
      access: HookAccess.ALLOW,
    },
    {
      id: '2',
      hostName: 'remote2.some.whe.re',
      hostIp: '192.168.200.202',
      access: HookAccess.UNKNOWN,
    },
    {
      id: '3',
      hostName: 'remote3.some.whe.re',
      hostIp: '192.168.200.203',
      access: HookAccess.BLOCK,
    },
  ];

  /**
   * Columns to display
   */
  public displayCols: string[] = [
    'access',
    'hostIp',
    'hostName',
    'action',
  ];

  /**
   * Data source for the table.
   */
  public dataSource = new MatTableDataSource(this.remotes);

  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
