import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule, Route } from "@angular/router";

import {TuiAccordionModule} from '@taiga-ui/kit';

import { StudentComponent } from "./student.component";
import { StudentMainComponent } from "./components/student-main/student-main.component";
import { ProfileComponent } from "../shared/components/profile/profile.component";
import { StatisticsComponent } from "../shared/components/statistics/statistics.component";
import { GroupStudentComponent } from "./components/group-student/group-student.component";
import { GroupListStudentComponent } from "./components/group-list-student/group-list-student.component";
import { GroupDetailedStudentComponent } from "./components/group-detailed-student/group-detailed-student.component";
import { TasksStudentComponent } from "./components/tasks-student/tasks-student.component";
import { TaskListStudentComponent } from "./components/task-list-student/task-list-student.component";
import { NavigationBarStudentComponent } from "./components/navigation-bar-student/navigation-bar-student.component";
import { SharedModule } from "../shared/shared.module";
import { DialogWindowTestStartComponent } from "./components/dialog-window-test-start/dialog-window-test-start.component";
import { DialogWindowStudentComponent } from "./components/dialog-window-student/dialog-window-student.component";

const routesGroupStudent: Route = { 
  path: 'group', component: GroupStudentComponent, 
    children: [
      { path: 'list', component: GroupListStudentComponent},
      { path: 'details/:id', component: GroupDetailedStudentComponent},
    ]
  };

const routesTaskStudent: Route = { 
  path: 'task', component: TasksStudentComponent, 
    children: [
      { path: 'list', component: TaskListStudentComponent},
    ]
  };

const studentRoutes: Routes = [{
  path: 'student', component: StudentComponent, 
    children: [
      { path: 'main', component: StudentMainComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'statistics', component: StatisticsComponent },
      routesGroupStudent, routesTaskStudent
    ],
  }
]

@NgModule({
  declarations: [
    StudentComponent,
    StudentMainComponent,
    GroupStudentComponent,
    GroupListStudentComponent,
    GroupDetailedStudentComponent,
    TasksStudentComponent,
    TaskListStudentComponent,
    DialogWindowStudentComponent,
    DialogWindowTestStartComponent,
    NavigationBarStudentComponent,
  ],
  imports: [
    CommonModule, 
    SharedModule,
    TuiAccordionModule,
    RouterModule.forChild(studentRoutes)
  ],
})
export class StudentModule { }