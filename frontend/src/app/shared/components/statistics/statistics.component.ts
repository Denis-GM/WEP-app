import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {TaskService} from "../../../core/api/task.service";
import {GroupService} from "../../../core/api/group.service";
import {StudentService} from "../../../core/api/student.service";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  protected statistic: any = {};

  constructor(private taskService: TaskService, private groupService: GroupService,
              private studentService: StudentService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.getAllAccountStatistics();
  }

  getAllAccountStatistics(): void {
    this.studentService.getAllAccountStatistics().subscribe(
      (data: any) => {
        console.log(data);
        this.statistic = data;
      }
    )
  }

}
