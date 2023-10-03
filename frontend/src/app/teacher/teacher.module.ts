import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule, Route } from "@angular/router";

import {TuiAccordionModule} from '@taiga-ui/kit';

import { TeacherComponent } from "./teacher.component";
import { StatisticsComponent } from "../shared/components/statistics/statistics.component";
import { ProfileComponent } from "../shared/components/profile/profile.component";
import { StatisticsTeacherComponent } from "./components/statistics-teacher/statistics-teacher.component";
import { ConstructorComponent } from "./components/constructor/constructor.component";
import { TaskConstructorComponent } from "./components/task-constructor/task-constructor.component";
import { QuestionsConstructorComponent } from "./components/questions-constructor/questions-constructor.component";
import { GroupTeacherComponent } from "./components/group-teacher/group-teacher.component";
import { GroupListTeacherComponent } from "./components/group-list-teacher/group-list-teacher.component";
import { GroupDetailedTeacherComponent } from "./components/group-detailed-teacher/group-detailed-teacher.component";
import { TasksTeacherComponent } from "./components/tasks/tasks-teacher.component";
import { TaskListTeacherComponent } from "./components/task-list-teacher/task-list-teacher.component";
import { TaskDetailsTeacherComponent } from "./components/task-details-teacher/task-details-teacher.component";
import { NavigationBarTeacherComponent } from "./components/navigation-bar-teacher/navigation-bar-teacher.component";
import { DialogWindowTeacherComponent } from "./components/dialog-window-teacher/dialog-window-teacher.component";
import { SharedModule } from "../shared/shared.module";

const routesConstructor: Route = { 
  path: 'constructor', component: ConstructorComponent, 
    children: [
      { path: 'task-constructor', component: TaskConstructorComponent},
      { path: 'questions-constructor', component: QuestionsConstructorComponent},
    ]
};

const routesGroupTeacher: Route = { 
  path: 'group', component: GroupTeacherComponent, 
    children: [
      { path: 'list', component: GroupListTeacherComponent},
      { path: 'details/:id', component: GroupDetailedTeacherComponent},
    ]
};

const routesTaskTeacher: Route = { 
  path: 'task', component: TasksTeacherComponent, 
    children: [
      { path: 'list', component: TaskListTeacherComponent},
      { path: 'details/:id', component: TaskDetailsTeacherComponent},
    ]
};

const teacherRoutes: Routes = [{ 
  path: 'teacher', component: TeacherComponent, 
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'statistics', component: StatisticsComponent },
      { path: 'statistics-teacher', component: StatisticsTeacherComponent },
      routesConstructor, routesGroupTeacher, routesTaskTeacher
    ]
  }
];

@NgModule({
  declarations: [
    TeacherComponent,
    ConstructorComponent,
    TaskConstructorComponent,
    QuestionsConstructorComponent,
    GroupTeacherComponent,
    GroupListTeacherComponent,
    GroupDetailedTeacherComponent,
    TasksTeacherComponent,
    TaskListTeacherComponent,
    TaskDetailsTeacherComponent,
    StatisticsTeacherComponent,
    DialogWindowTeacherComponent,
    NavigationBarTeacherComponent,
  ],
  imports: [
    CommonModule, 
    SharedModule,
    TuiAccordionModule,
    RouterModule.forChild(teacherRoutes)
  ],
})
export class TeacherModule { }