import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InboxComponent } from './inbox/inbox.component';
import { TodayComponent } from './today/today.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { TasksComponent } from './tasks/tasks.component';
import { NewProjectComponent } from './new-project/new-project.component';

const routes: Routes = [
  { path: 'inbox', component: InboxComponent },
  { path: 'today', component: TodayComponent },
  { path: 'upcoming', component: UpcomingComponent },
  { path: 'tasks', component: TasksComponent},
  { path: 'newProject', component: NewProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }