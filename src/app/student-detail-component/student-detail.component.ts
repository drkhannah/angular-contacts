import { Component, Input, OnInit, OnChanges } from '@angular/core';

import { StudentService } from '../student.service';
import { GradeService } from '../grade.service';
import { ClassService } from '../class.service';


import { Student } from '../models/student';
import { Class } from '../models/class';
import { Grade } from '../models/grade';

@Component({
  selector: 'student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit, OnChanges {
  //Properties
  @Input() student: Student;
  allClasses: Class[];
  classToAdd: Class;
  studentClasses: Class[];
  studentGrades: Grade[];

  constructor(
    private studentService:StudentService,
    private gradeService:GradeService,
    private classService: ClassService) { }

  //LifeCycle Hooks
  ngOnInit(): void {
    this.classService.getClasses().then(classes => this.allClasses = classes);
  }

  ngOnChanges(): void {
    if(this.student){
      this.studentGrades = this.student.grades;
      this.studentClasses = this.student.classes;
    }
  }

  //Methods
  saveStudent():void {
    this.studentService.updateStudent(this.student).then(
      student =>
      console.log(`${student.first_name} was updated`));
  }

  addClass():void {
    if(this.classToAdd){
      this.classService.addStudentToClass(this.classToAdd.id, this.student.id).then(classes => this.studentClasses = classes);
    }
  }

  deleteClass(classToDelete: Class):void {
    this.classService
    .removeStudentFromClass(classToDelete.id, this.student.id)
    .then(() => {
      this.studentClasses = this.studentClasses.filter(c => c !== classToDelete);
    });
  }

  deleteGrade(grade:Grade): void {
    this.gradeService
        .deleteGrade(this.student.id, grade.assignment.id)
        .then(() => {
          this.studentGrades = this.studentGrades.filter(g => g !== grade);
        });
  }

}
