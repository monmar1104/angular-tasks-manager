import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../model/task';

@Injectable()
export class TaskService {

  private taskListObs = new BehaviorSubject<Array<Task>>([]);

  constructor() {
    const tasks = [
      {name: 'Zakupy', createDate: new Date().toLocaleString(), isDone: false},
      {name: 'Śniadnie', createDate: new Date().toLocaleString(), isDone: false},
      {name: 'Praca', createDate: new Date().toLocaleString(), isDone: false},
      {name: 'Obiad', createDate: new Date().toLocaleString(), isDone: false},
      {name: 'Angielski', createDate: new Date().toLocaleString(), isDone: false},
      {name: 'Kodowanie', createDate: new Date().toLocaleString(), endDate: new Date().toLocaleString(), isDone: true},
      {name: 'Praca', createDate: new Date().toLocaleString(), isDone: false}
    ];
    this.taskListObs.next(tasks);
  }

  add(task: Task) {
    const taskList = this.taskListObs.getValue();
    taskList.push(task);
    this.taskListObs.next(taskList);
    console.log(taskList);
  }

  remove(task: Task) {
    const taskList = this.taskListObs.getValue().filter(t => t !== task);
    this.taskListObs.next(taskList);
  }
  markAsDone(task: Task) {
    task.endDate = new Date().toLocaleString();
    task.isDone = true;
    const newTaskList = this.taskListObs.getValue();
    this.taskListObs.next(newTaskList);
  }

  getTasksTodoObs(): Observable<Array<Task>> {
    return this.taskListObs.asObservable();
  }

}
