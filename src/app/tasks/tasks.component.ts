import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasksString: String | undefined;

  constructor(private tasksService:TasksService) { }

  ngOnInit(): void {
    this.tasksService.getTasks().subscribe((data: String) => {
      console.log(data);
      this.tasksString = data;
    })
  }

}
