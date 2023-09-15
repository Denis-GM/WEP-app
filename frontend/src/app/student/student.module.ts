import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes } from "@angular/router";
import { StudentComponent } from "./student.component";
import { StudentMainComponent } from "./components/student-main/student-main.component";
import { ProfileComponent } from "../shared/components/profile/profile.component";
import { StatisticsComponent } from "../shared/components/statistics/statistics.component";
import { GroupStudentComponent } from "./components/group-student/group-student.component";
import { GroupListStudentComponent } from "./components/group-list-student/group-list-student.component";
import { GroupDetailedStudentComponent } from "./components/group-detailed-student/group-detailed-student.component";
import { TasksStudentComponent } from "./components/tasks-student/tasks-student.component";
import { TaskListStudentComponent } from "./components/task-list-student/task-list-student.component";

const routesGroupStudent: any = { 
  path: 'group', component: GroupStudentComponent, 
    children: [
      { path: 'list', component: GroupListStudentComponent},
      { path: 'details/:id', component: GroupDetailedStudentComponent},
    ]
  };

const routesTaskStudent: any = { 
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
  declarations: [],
  imports: [
    CommonModule, 
    RouterModule.forChild(teacherRoutes)
  ],
})
export class StudentModule { }