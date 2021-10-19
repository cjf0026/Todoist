import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InboxComponent } from './inbox/inbox.component';
import { TodayComponent } from './today/today.component';
import { TryBoardsComponent } from './try-boards/try-boards.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: 'inbox', component: InboxComponent },
  { path: 'today', component: TodayComponent },
  { path: 'try-boards', component: TryBoardsComponent },
  { path: 'upcoming', component: UpcomingComponent },
  { path: 'welcome', component: WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }