import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../model/task';

@Injectable()
export class TaskService {

  private tasks: Array<Task> = [];
  private finishedTasks: Array<Task> = [];

  private taskListObs = new BehaviorSubject<Array<Task>>([]);
  private taskDoneObs = new BehaviorSubject<Array<Task>>([]);

  constructor() {
    this.tasks = [
      {name: '1. Zakupy', createDate: new Date()},
      {name: '2. Śniadanie', createDate: new Date()},
      {name: '3. Praca', createDate: new Date()},
      {name: '4. Obiad', createDate: new Date()},
      {name: '5. Angielski', createDate: new Date()},
      {name: '6. Praca', createDate: new Date()}
    ];
    this.taskListObs.next(this.tasks);
  }

  add(task: Task) {
    this.tasks.push(task);
    this.taskListObs.next(this.tasks);
    console.log(this.tasks);
  }

  remove(task: Task) {
    this.tasks = this.tasks.filter(t => t !== task);
    this.taskListObs.next(this.tasks);
  }
  markAsDone(task: Task) {
    this.finishedTasks.push(task);
    this.remove(task);
    this.taskDoneObs.next(this.finishedTasks);
    console.log(this.finishedTasks);
  }

  getTasksTodoObs(): Observable<Array<Task>> {
    return this.taskListObs.asObservable();
  }

  getTasksDoneObs(): Observable<Array<Task>> {
    return this.taskDoneObs.asObservable();
  }
}
