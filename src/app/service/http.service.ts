import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Task } from '../model/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  readonly APIUrl = 'https://api.mlab.com/api/1/databases/task_manager/collections/task';

  readonly APIKey = '';

  readonly param = new HttpParams().set('apiKey', this.APIKey);

  constructor(private httpClient: HttpClient ) {
    this.getTasks();
  }

  getTasks(): Observable<Array<Task>> {
      return this.httpClient.get<Array<Task>>(this.APIUrl, {params: this.param});
  }

  addTasks(taskList: Array<Task>) {
    this.httpClient.post(this.APIUrl, taskList, {params: this.param})
                  .subscribe(tasks => {
                    console.log(tasks);
                  });
  }

  addTask(task: Task) {
    this.httpClient.post(this.APIUrl, task, {params: this.param})
                  .subscribe(tasks => {
                    console.log(tasks);
                  });
  }

  deleteTask(task: Task) {
    this.httpClient.delete(this.APIUrl + '/' + task._id.$oid, {params: this.param})
                    .subscribe(p => {
                      console.log(p);
                    });
  }

  markTaskAsDone(task: Task) {
    this.httpClient.put(this.APIUrl, task, {params: this.param})
                    .subscribe(p => {
                      console.log(p);
                    });
  }
}
