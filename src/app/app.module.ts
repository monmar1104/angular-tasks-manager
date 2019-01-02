import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //added
import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { DoneTaskComponent } from './done-task/done-task.component';
import { TodoTaskComponent } from './todo-task/todo-task.component';
import { TaskService } from './service/task.service';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    DoneTaskComponent,
    TodoTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //added
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
