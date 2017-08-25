import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentListComponent } from '../student-list-component/student-list.component';
import { TeacherListComponent } from '../teacher-list-component/teacher-list.component';
import { ClassListComponent } from '../class-list-component/class-list.component';
import { AddAssignmentComponent } from '../add-assignment-component/add-assignment.component';
import { AddClassComponent } from '../add-class-component/add-class.component';
import { AddTeacherComponent } from '../add-teacher-component/add-teacher.component';
import { AddStudentComponent } from '../add-student-component/add-student.component';
import { AddGradeComponent } from '../add-grade-component/add-grade.component';

const routes: Routes = [
  { path: '', redirectTo: 'student-list', pathMatch: 'full' },
  { path: 'student-list', component: StudentListComponent },
  { path: 'teacher-list', component: TeacherListComponent },
  { path: 'class-list', component: ClassListComponent },
  { path: 'add-assignment', component: AddAssignmentComponent },
  { path: 'add-class', component: AddClassComponent },
  { path: 'add-teacher', component: AddTeacherComponent },
  { path: 'add-student', component: AddStudentComponent },
  { path: 'add-grade/:id/:name', component: AddGradeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
