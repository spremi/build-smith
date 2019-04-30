//
// [build-smith-client]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './dictums/highlight/highlight.directive';
import { InertDirective } from './dictums/inert/inert.directive';
import { IconService } from './modules/material/icon.service';
import { MaterialModule } from './modules/material/material.module';
import { BodyComponent } from './parts/body/body.component';
import { BuildStatusComponent } from './parts/build-status/build-status.component';
import { CredentialsComponent } from './parts/credentials/credentials.component';
import { FooterComponent } from './parts/footer/footer.component';
import { HeaderComponent } from './parts/header/header.component';
import { ProjectAccessComponent } from './parts/project-access/project-access.component';
import { ProjectHealthComponent } from './parts/project-health/project-health.component';
import { ProjectStateComponent } from './parts/project-state/project-state.component';
import { UserRoleComponent } from './parts/user-role/user-role.component';
import { UserStatusComponent } from './parts/user-status/user-status.component';
import { CredScopePipe } from './pipes/cred-scope.pipe';
import { CredTypePipe } from './pipes/cred-type.pipe';
import { UserRolePipe } from './pipes/user-role.pipe';
import { UserStatusPipe } from './pipes/user-status.pipe';
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
import { metaReducers, reducers } from './store';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    LogoutComponent,
    ConfigComponent,
    StrayComponent,
    ProjectListComponent,
    ProjectInfoComponent,
    RemoteListComponent,
    RemoteInfoComponent,
    UserListComponent,
    UserInfoComponent,
    BuildListComponent,
    BuildInfoComponent,
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    UserRolePipe,
    UserStatusPipe,
    CredTypePipe,
    CredScopePipe,
    HighlightDirective,
    InertDirective,
    UserStatusComponent,
    UserRoleComponent,
    ProjectStateComponent,
    ProjectAccessComponent,
    ProjectHealthComponent,
    BuildStatusComponent,
    CredentialsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private iconSvc: IconService) {
    iconSvc.register();
  }
}
