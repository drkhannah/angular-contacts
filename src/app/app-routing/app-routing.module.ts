import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentListComponent } from '../student-list-component/student-list.component';
import { TeacherListComponent } from '../teacher-list-component/teacher-list.component';
import { AssignmentListComponent } from '../assignment-list-component/assignment-list.component';
import { ClassListComponent } from '../class-list-component/class-list.component';
import { AddAssignmentComponent } from '../add-assignment-component/add-assignment.component';

const routes: Routes = [
  { path: '', redirectTo: 'student-list', pathMatch: 'full' },
  { path: 'student-list', component: StudentListComponent },
  { path: 'teacher-list', component: TeacherListComponent },
  { path: 'assignment-list', component: AssignmentListComponent },
  { path: 'class-list', component: ClassListComponent },
  { path: 'add-assignment', component: AddAssignmentComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
