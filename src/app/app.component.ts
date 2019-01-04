import { Component } from '@angular/core';
import { TaskService } from './service/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-task-manager';

  constructor(private taskService: TaskService) {}

  addTasksToDB() {
    this.taskService.addTasksToDB();
  }
}
