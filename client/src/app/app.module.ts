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
import { AboutComponent } from './routes/about/about.component';
import { ConfigComponent } from './routes/config/config.component';
import { HomeComponent } from './routes/home/home.component';
import { LoginComponent } from './routes/login/login.component';
import { LogoutComponent } from './routes/logout/logout.component';
import { ProjectInfoComponent } from './routes/project-info/project-info.component';
import { ProjectListComponent } from './routes/project-list/project-list.component';
import { StrayComponent } from './routes/stray/stray.component';

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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
