import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent implements OnInit {

  @Input()
  finishedTasks: Array<string> = [];

  constructor(private taskService:  TaskService) {
    taskService.getTasksDoneObs().subscribe(tasks => {
      this.finishedTasks = tasks;
    });
   }

  ngOnInit() {
  }

}
