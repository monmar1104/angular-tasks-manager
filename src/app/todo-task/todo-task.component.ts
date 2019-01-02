import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TaskService } from '../service/task.service';
import { Task } from '../model/task';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class TodoTaskComponent implements OnInit {


  tasks = [];

  constructor(private taskService: TaskService) {
    this.taskService.getTasksTodoObs().subscribe(taskList => {
      this.tasks = taskList;
    });
    console.log(this.tasks);
   }

  ngOnInit() {
  }

  markAsDone(task: Task) {
    this.taskService.markAsDone(task);
  }

  remove(task: Task) {
    this.taskService.remove(task);
  }

  getColor(): string {
    return this.tasks.length > 5 ? 'red' : 'green';
  }

}
