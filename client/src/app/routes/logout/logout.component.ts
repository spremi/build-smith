//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sp-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.sass'],
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onCancel() {
  }

  onLogout() {
  }
}
