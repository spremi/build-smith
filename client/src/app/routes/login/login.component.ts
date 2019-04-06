//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'sp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    user: ['', Validators.required],
    pass: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
  }

  onCancel() {
    this.router.navigate(['/']);
  }

  onlogin() {
  }
}
