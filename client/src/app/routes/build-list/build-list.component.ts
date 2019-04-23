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
import { Build, BuildStatus, BuildTrigger } from 'src/app/models/build';

@Component({
  selector: 'sp-build-list',
  templateUrl: './build-list.component.html',
  styleUrls: ['./build-list.component.sass'],
})
export class BuildListComponent implements OnInit {

  /**
   * Dummy build list
   */
  public builds: Build[] = [
    {
      id: 'b0',
      pid: 'p8',
      status: BuildStatus.ONGOING,
      trigger: BuildTrigger.MANUAL,
      startTime: 'Mar 10 2019 18:20:32',
      endTime: 'Mar 10 2019 18:24:16',
    },
    {
      id: 'b1',
      pid: 'p8',
      status: BuildStatus.SUCCESS,
      trigger: BuildTrigger.SCHEDULE,
      startTime: 'Mar 10 2019 18:26:10',
      endTime: 'Mar 10 2019 18:28:15',
    },
    {
      id: 'b2',
      pid: 'p8',
      status: BuildStatus.FAILURE,
      trigger: BuildTrigger.HOOK,
      startTime: 'Mar 10 2019 18:30:20',
      endTime: 'Mar 10 2019 18:32:40',
    },
    {
      id: 'b3',
      pid: 'p8',
      status: BuildStatus.ABORT,
      trigger: BuildTrigger.HOOK,
      startTime: 'Mar 10 2019 18:35:02',
      endTime: 'Mar 10 2019 18:38:06',
    },
  ];


  /**
   * Columns to display
   */
  public displayCols: string[] = [
    'id',
    'status',
    'trigger',
    'start',
    'end',
    'action',
  ];

  /**
   * Data source for the table.
   */
  public dataSource = new MatTableDataSource(this.builds);

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
