//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  initProject, Project, ProjectAccess, ProjectHealth, ProjectStatus
} from 'src/app/models/project';
import { RepoAccess, ScmTypes } from 'src/app/models/repo';

import { cloneDeep } from 'lodash';

@Component({
  selector: 'sp-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.sass'],
})
export class ProjectInfoComponent implements OnInit {
  /**
   * Dummy project info
   */
  public project: Project = {
    id: '1',
    name: 'Project 1',
    desc: 'This is a dummy project.',
    enabled: true,
    status: ProjectStatus.NEVER,
    health: ProjectHealth.LEVEL0,
    build: {
      latest: 'b00',
      lastSuccess: 'Mar 10 2019 23:41:24',
      lastFailure: 'Mar 10 2019 23:42:54',
      lastDuration: 240,
    },
    repos: [
      {
        id: 'repo01',
        repo: {
          type: ScmTypes.GIT,
          url: '',
          label: '',
          credId: 'c00',
          refspec: 'refspec',
          branches: [],
          advanced: null,
        },
        status: {
          access: RepoAccess.NOREQ,
          error: '',
        },
      },
    ],
    perms: {
      access: ProjectAccess.PUBLIC,
      viewers: [],
      builders: [],
      admins: [],
    },
    triggers: {
      user: true,
      hook: true,
      hookAttrs: {
        token: 'secret_hook_token',
      },
      schedule: true,
      schedAttrs: {
        cron: '5 * * * *',
      },
      after: true,
      afterAttrs: {
        projects: ['proj1', 'proj2'],
        onFailure: false,
      },
    },
    workspace: {
      dir: '/some/path',
      buildDir: '${WORKSPACE}/builds',
      recordDir: '${WORKSPACE}/records',
      cleanBefore: false,
      cleanAfter: false,
      buildCount: 0,
    },
    notifications: {
      useEmail: true,
      emailData: {
        to: 'a@null.dev',
        cc: 'b@null.dev',
        bcc: 'c@null.dev',
        subject: 'Build status',
        header: null,
        footer: null,
        body: 'Placeholder for email template',
      },
    },
  };

  /**
   * Form group for this component.
   */
  projectForm: FormGroup;

  /**
   * Can user edit the form?
   */
  canEdit = false;

  /**
   * Is user editing the form?
   */
  isEditing = false;

  /**
   * Flag: Add new project?
   */
  add = false;

  constructor(private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit() {
    const data = this.route.snapshot.data;

    if (data && data.hasOwnProperty('add') && data.add) {
      this.add = true;
      this.isEditing = true;

      this.project = initProject();
    }

    this.projectForm = this.createForm();
  }

  /**
   * Discard changes.
   */
  onDiscard() {
    this.isEditing = false;

    this.projectForm.reset({
      id: this.project.id,
      name: this.project.name,
      desc: this.project.desc,
      enabled: this.project.enabled,
      build: cloneDeep(this.project.build),
      repos: cloneDeep(this.project.repos),
      perms: cloneDeep(this.project.perms),
      triggers: cloneDeep(this.project.triggers),
      workspace: cloneDeep(this.project.workspace),
      isEmailNotify: this.project.notifications.useEmail,
      emailNotify: cloneDeep(this.project.notifications.emailData),
    });

    this.projectForm.markAsPristine();
    this.projectForm.markAsUntouched();
  }

  /**
   * Save changes.
   */
  onSave() {
    this.isEditing = false;

    console.log(this.projectForm.value);
  }

  /**
   * Creates form group based on specified data
   */
  private createForm(): FormGroup {
    return this.fb.group({
      name: [this.project.name, Validators.required],
      desc: [this.project.desc],
      triggers: [this.project.triggers],
      workspace: [this.project.workspace],
      isEmailNotify: [this.project.notifications.useEmail],
      emailNotify: [this.project.notifications.emailData],
    });
  }
}
