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
import { ProjectBrief, ProjectHealth, ProjectStatus } from 'src/app/models/project';

@Component({
  selector: 'sp-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.sass'],
})
export class ProjectListComponent implements OnInit {

  /**
   * Dummy build list
   */
  public projList: ProjectBrief[] = [
    {
      id: 'p1',
      name: 'Project 1',
      desc: 'This is project 1',
      enabled: true,
      status: ProjectStatus.NEVER,
      health: ProjectHealth.LEVEL0,
      build: {
        latest: 'b10',
        lastSuccess: 'Mar 20 2019 23:50:54',
        lastFailure: 'Mar 20 2019 23:50:54',
        lastDuration: 10,
      },
    },
    {
      id: 'p2',
      name: 'Project 2',
      desc: 'This is project 2',
      enabled: true,
      status: ProjectStatus.ONGOING,
      health: ProjectHealth.LEVEL1,
      build: {
        latest: 'b20',
        lastSuccess: 'Mar 20 2019 23:50:54',
        lastFailure: 'Mar 20 2019 23:50:54',
        lastDuration: 10,
      },
    },
    {
      id: 'p3',
      name: 'Project 3',
      desc: 'This is project 3',
      enabled: false,
      status: ProjectStatus.SUCCESS,
      health: ProjectHealth.LEVEL2,
      build: {
        latest: 'b30',
        lastSuccess: 'Mar 20 2019 23:50:54',
        lastFailure: 'Mar 20 2019 23:50:54',
        lastDuration: 10,
      },
    },
    {
      id: 'p4',
      name: 'Project 4',
      desc: 'This is project 4',
      enabled: true,
      status: ProjectStatus.FALIURE,
      health: ProjectHealth.LEVEL3,
      build: {
        latest: 'b40',
        lastSuccess: 'Mar 20 2019 23:50:54',
        lastFailure: 'Mar 20 2019 23:50:54',
        lastDuration: 10,
      },
    },
    {
      id: 'p5',
      name: 'Project 5',
      desc: 'This is project 5',
      enabled: true,
      status: ProjectStatus.ABORT,
      health: ProjectHealth.LEVEL4,
      build: {
        latest: 'b50',
        lastSuccess: 'Mar 20 2019 23:50:54',
        lastFailure: 'Mar 20 2019 23:50:54',
        lastDuration: 10,
      },
    },
    {
      id: 'p6',
      name: 'Project 6',
      desc: 'This is project 6',
      enabled: false,
      status: ProjectStatus.DISABLED,
      health: ProjectHealth.LEVEL5,
      build: {
        latest: 'b60',
        lastSuccess: 'Mar 20 2019 23:50:54',
        lastFailure: 'Mar 20 2019 23:50:54',
        lastDuration: 10,
      },
    },
  ];

  /**
   * Columns to display
   */
  public displayCols: string[] = [
    'state',
    'name',
    'status',
    'health',
    'lastSuccess',
    'lastFailure',
    'lastDuration',
    'action',
  ];

  /**
   * Data source for the table.
   */
  public dataSource = new MatTableDataSource(this.projList);

  @ViewChild(MatSort) sort: MatSort;

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
