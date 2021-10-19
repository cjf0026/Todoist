import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class TasksService {
    private baseUrl:string = 'https://todoist-app-af44f-default-rtdb.firebaseio.com/Projects';
    private targetUrl = '/Project1.json';
    
    constructor(private http: HttpClient) {

    }

    getTasks() {
        console.log(this.baseUrl + this.targetUrl);
        return this.http.get<String>(this.baseUrl + this.targetUrl);
    }
}