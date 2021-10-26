import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subscription } from "rxjs";
import { Project } from "./project.model";

@Injectable({providedIn: 'root'})
export class ProjectsService {
    private baseUrl:string = 'https://todoist-app-af44f-default-rtdb.firebaseio.com/Projects/Project';
    private numUrl:string = 'https://todoist-app-af44f-default-rtdb.firebaseio.com/NumProjects.json'
    
    constructor(private http: HttpClient) {

    }

    getNumProjects(){
        console.log(this.numUrl);
        console.log(this.http.get(this.numUrl));
        return this.http.get<number>(this.numUrl);
    }

    getProject(num: number) {
        console.log(this.baseUrl + num.toString() + '.json');
        console.log(this.http.get(this.baseUrl + num.toString() + '.json'));
        return this.http.get<Project>(this.baseUrl);
    }

    newProject(newProj: Project) {
        let num: number = 0;
        this.getNumProjects().subscribe((data: number) => {
            num = data + 1;
        })
        return this.http.put(this.baseUrl + num.toString() + '.json', newProj);
    }
}