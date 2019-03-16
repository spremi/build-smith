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

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconService } from './modules/material/icon.service';
import { MaterialModule } from './modules/material/material.module';
import { HeaderComponent } from './parts/header/header.component';
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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private iconSvc: IconService) {
    iconSvc.register();
  }
}
