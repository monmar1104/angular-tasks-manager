import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../service/task.service';
import { Task } from '../model/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  newTask: string;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  add() {
    this.taskService.add({name: this.newTask, createDate: new Date().toLocaleString(), isDone: false});
    this.newTask = '';
  }

}
