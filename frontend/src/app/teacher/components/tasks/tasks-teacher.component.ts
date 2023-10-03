import { Component, OnInit } from '@angular/core';
import {TaskService} from "../../../core/api/task.service";
import {ITest} from "../../../core/interfaces/interface.test";

@Component({
  selector: 'app-task-teacher',
  templateUrl: './tasks-teacher.component.html',
  styleUrls: ['./tasks-teacher.component.css']
})
export class TasksTeacherComponent implements OnInit {
  protected tasks?: ITest[];

  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
    this.createTask();
  }

  createTask(): void {
    this.taskService.getTasks().subscribe(
      data => {
        console.log(data);
        this.tasks = data;
      },
      error => {
        console.log(error);
      }
    )
  }
}
