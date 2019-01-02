import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class TaskService {

  private tasks: Array<string> = [];
  private finishedTasks: Array<string> = [];

  private taskListObs = new BehaviorSubject<Array<string>>(this.tasks);
  private taskDoneObs = new BehaviorSubject<Array<string>>(this.finishedTasks);

  constructor() {
    this.tasks = ['1. Zakupy', '2. Śniadanie', '3. Praca', '4. Obiad', '5. Angielski', '6. Parca'];
    this.taskListObs.next(this.tasks);
  }

  add(task: string) {
    this.tasks.push(task);
    this.taskListObs.next(this.tasks);
    console.log(this.tasks);
  }

  remove(task: string) {
    this.tasks = this.tasks.filter(t => t !== task);
    this.taskListObs.next(this.tasks);
  }
  markAsDone(task: string) {
    this.finishedTasks.push(task);
    this.remove(task);
    this.taskDoneObs.next(this.finishedTasks);
    console.log(this.finishedTasks);
  }

  getTasksTodoObs(): Observable<Array<string>> {
    return this.taskListObs.asObservable();
  }

  getTasksDoneObs(): Observable<Array<string>> {
    return this.taskDoneObs.asObservable();
  }
}
