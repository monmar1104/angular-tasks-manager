import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../service/task.service';
import { Task } from '../model/task';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent implements OnInit {

  @Input()
  finishedTasks: Array<Task> = [];

  constructor(private taskService:  TaskService) {
    taskService.getTasksTodoObs().subscribe(tasks => {
      this.finishedTasks = tasks.filter(t => t.isDone);
    });
   }

  ngOnInit() {
  }

}
