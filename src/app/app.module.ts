import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TaskListComponent } from './task-list/task-list.component';
import { LayoutComponent } from './layout/layout.component';
import { AppRoutingModule } from './app-routing.module';
import { InboxComponent } from './inbox/inbox.component';
import { TodayComponent } from './today/today.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TryBoardsComponent } from './try-boards/try-boards.component';
import { HttpClientModule } from '@angular/common/http';
import { TasksComponent } from './tasks/tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    TaskListComponent,
    LayoutComponent,
    InboxComponent,
    TodayComponent,
    UpcomingComponent,
    WelcomeComponent,
    TryBoardsComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
