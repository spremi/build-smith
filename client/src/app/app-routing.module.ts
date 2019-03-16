//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './routes/about/about.component';
import { AdminComponent } from './routes/admin/admin.component';
import { BuildInfoComponent } from './routes/build-info/build-info.component';
import { BuildListComponent } from './routes/build-list/build-list.component';
import { ConfigComponent } from './routes/config/config.component';
import { HomeComponent } from './routes/home/home.component';
import { LoginComponent } from './routes/login/login.component';
import { LogoutComponent } from './routes/logout/logout.component';
import { ProjectInfoComponent } from './routes/project-info/project-info.component';
import { ProjectListComponent } from './routes/project-list/project-list.component';
import { RemoteInfoComponent } from './routes/remote-info/remote-info.component';
import { RemoteListComponent } from './routes/remote-list/remote-list.component';
import { StrayComponent } from './routes/stray/stray.component';
import { UserInfoComponent } from './routes/user-info/user-info.component';
import { UserListComponent } from './routes/user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'config',
    component: ConfigComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
  {
    path: 'remotes',
    children: [
      {
        path: '',
        component: RemoteListComponent,
        pathMatch: 'full',
      },
      {
        path: 'add',
        component: RemoteInfoComponent,
        data: { add: true },
      },
      {
        path: ':id',
        component: RemoteInfoComponent,
      },
    ],
  },
  {
    path: 'projects',
    children: [
      {
        path: '',
        component: ProjectListComponent,
        pathMatch: 'full',
      },
      {
        path: 'add',
        component: ProjectInfoComponent,
        data: { add: true },
      },
      {
        path: ':id',
        children: [
          {
            path: '',
            component: ProjectInfoComponent,
          },
          {
            path: 'builds',
            children: [
              {
                path: '',
                component: BuildListComponent,
                pathMatch: 'full',
              },
              {
                path: ':id',
                component: BuildInfoComponent,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: 'users',
    children: [
      {
        path: '',
        component: UserListComponent,
        pathMatch: 'full',
      },
      {
        path: 'add',
        component: UserInfoComponent,
        data: { add: true },
      },
      {
        path: ':id',
        component: UserInfoComponent,
      },
    ],
  },
  {
    path: '**',
    component: StrayComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
