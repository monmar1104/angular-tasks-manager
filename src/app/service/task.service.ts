import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../model/task';
import { HttpService } from './http.service';

@Injectable()
export class TaskService {

  private taskListObs = new BehaviorSubject<Array<Task>>([]);

  constructor(private httpService: HttpService) {
    this.httpService.getTasks().subscribe(tasks => {
      this.taskListObs.next(tasks);
    });
  }

  add(task: Task) {
    const taskList = this.taskListObs.getValue();
    taskList.push(task);
    this.taskListObs.next(taskList);
    this.httpService.addTask(task);
    console.log(taskList);
  }

  remove(task: Task) {
    const taskList = this.taskListObs.getValue().filter(t => t !== task);
    this.taskListObs.next(taskList);
    this.httpService.deleteTask(task);
  }

  markAsDone(task: Task) {
    task.endDate = new Date().toLocaleString();
    task.isDone = true;
    const newTaskList = this.taskListObs.getValue();
    this.taskListObs.next(newTaskList);
    this.httpService.markTaskAsDone(task);
  }

  getTasksTodoObs(): Observable<Array<Task>> {
    return this.taskListObs.asObservable();
  }

  addTasksToDB() {
      this.httpService.addTasks(this.taskListObs.getValue());
  }

}
