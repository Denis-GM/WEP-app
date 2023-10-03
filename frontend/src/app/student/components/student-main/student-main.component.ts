import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ITest} from "../../../core/interfaces/interface.test";
import {TaskService} from "../../../core/api/task.service";
import {IGroup} from "../../../core/interfaces/interface.group";
import {GroupService} from "../../../core/api/group.service";
import {StudentService} from "../../../core/api/student.service";

@Component({
  selector: 'app-student-main',
  templateUrl: './student-main.component.html',
  styleUrls: ['./student-main.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class StudentMainComponent implements OnInit {
  protected statistic: any = {};
  protected protagonist: any = {};
  protected hero: any = {};
  protected tasks?: ITest[];
  protected testRecord: any = {};
  protected groups: IGroup[] = [];
  protected completedTests?: ITest[];
  public thisTest ={};

  constructor(private taskService: TaskService, private groupService: GroupService,
              private studentService: StudentService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.updatePage();
  }

  public isOpen = false;
  public isOpenStartTest = false;

  public showDialog() {
    this.isOpen = true;
  }

  protected manageDialog(isOpen: boolean) {
    this.isOpen = false;
    this.updatePage();
  }

  public showDialogStartTest(test: any) {
    this.thisTest = test;
    this.isOpenStartTest = true;
  }

  protected manageDialogTest(isOpen: boolean) {
    this.isOpenStartTest = false;
    this.updatePage();
  }

  getTasks(): void {
    this.taskService.getTasksByGroup().subscribe(
      (tests: any) => {
        console.log(tests);
        this.tasks = tests;
      }
    )
  }

  getGroups(): void {
    this.groupService.getGroupsStudent().subscribe(
      (groups: any) => {
        console.log(groups);
        this.groups = groups;
      }
    )
  }

  getAccountStatistics(): void {
    this.studentService.getAccountStatistics().subscribe(
      (data: any) => {
        console.log(data);
        this.statistic = data;
      }
    )
  }

  getProtagonist(): void {
    this.studentService.getProtagonist().subscribe(
      (data: any) => {
        console.log(data);
        this.protagonist = data;
        this.getHero(data.hero)
      }
    )
  }

  getTestRecord(): void {
    this.studentService.getTestRecordList().subscribe(
      (data: any) => {
        this.testRecord = data;
      }
    )
  }

  getHero(id: number): any {
    this.studentService.getHero(id).subscribe(
      (data: any) => {
        console.log(data);
        this.hero = data;
        return data;
      }
    )
  }

  excludeGroup(id: number) {
    this.groupService.excludeGroup(id).subscribe(
      (data: any) => console.log(data)
    );
    setTimeout(() => {
      this.updatePage();
    }, 100);
  }


  updatePage() {
    this.getGroups();
    this.getTasks();
    this.getAccountStatistics();
    this.getProtagonist();
    this.getTestRecord();
    this.cdr.detectChanges()
  }
}
