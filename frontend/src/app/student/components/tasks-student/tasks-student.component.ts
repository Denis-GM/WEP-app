import { Component, OnInit } from '@angular/core';
import {ITest} from "../../../core/interfaces/interface.test";
import {TaskService} from "../../../core/api/task.service";

@Component({
  selector: 'app-task-student',
  templateUrl: './tasks-student.component.html',
  styleUrls: ['./tasks-student.component.css']
})
export class TasksStudentComponent implements OnInit {
  protected tasks?: ITest[];

  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
    this.createTask();
  }

  createTask(): void {
    this.taskService.getTasks().subscribe(
      (data: any) => {
        console.log(data);
        this.tasks = data;
      },
      (error: any) => {
        console.log(error);
      }
    )
  }
}
