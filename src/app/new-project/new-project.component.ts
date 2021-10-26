import { Component, OnInit } from '@angular/core';
import { Project } from '../http/project.model';
import { ProjectsService } from '../http/projects.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  constructor(private projectsService: ProjectsService) {

  }

  ngOnInit(): void {
  }

  onNewProject(data: Project) {
    console.log(data);
    this.projectsService.newProject(data).subscribe(data => {
      console.log("Project added");
    });
  }

}
