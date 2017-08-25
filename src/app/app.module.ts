import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing/app-routing.module'

import { StudentService } from './student.service'
import { TeacherService } from './teacher.service'
import { AssignmentService } from './assignment.service'
import { ClassService } from './class.service'
import { GradeService } from './grade.service'


import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list-component/student-list.component';
import { StudentDetailComponent } from './student-detail-component/student-detail.component';
import { TeacherListComponent } from './teacher-list-component/teacher-list.component';
import { AssignmentDetailComponent } from './assignment-detail-component/assignment-detail.component';
import { TeacherDetailComponent } from './teacher-detail-component/teacher-detail.component';
import { ClassListComponent } from './class-list-component/class-list.component';
import { ClassDetailComponent } from './class-detail-component/class-detail.component';
import { AddAssignmentComponent } from './add-assignment-component/add-assignment.component';
import { AddClassComponent } from './add-class-component/add-class.component';
import { AddTeacherComponent } from './add-teacher-component/add-teacher.component';
import { AddStudentComponent } from './add-student-component/add-student.component';
import { AddGradeComponent } from './add-grade-component/add-grade.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentDetailComponent,
    TeacherListComponent,
    AssignmentDetailComponent,
    TeacherDetailComponent,
    ClassListComponent,
    ClassDetailComponent,
    AddAssignmentComponent,
    AddClassComponent,
    AddTeacherComponent,
    AddStudentComponent,
    AddGradeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [StudentService, TeacherService, AssignmentService, ClassService, GradeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
