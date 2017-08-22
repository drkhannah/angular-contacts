import { Component, Input, OnChanges } from '@angular/core';

import { StudentService } from '../student.service';
import { GradeService } from '../grade.service';

import { Student } from '../models/student';
import { Grade } from '../models/grade';

@Component({
  selector: 'student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnChanges {
  //Properties
  @Input() student: Student;
  grades: Grade[];

  constructor(private studentService:StudentService,
              private gradeService:GradeService,) { }

  //LifeCycle Hookds
  ngOnChanges(): void {
    if(this.student){
      this.grades = this.student.grades;
    }
  }

  //Methods
  saveStudent():void {
    this.studentService.updateStudent(this.student).then(
      student =>
      console.log(`${student.first_name} was updated`));
  }

  deleteGrade(grade:Grade): void {
    this.gradeService
        .deleteGrade(this.student.id, grade.assignment.id)
        .then(() => {
          this.grades = this.grades.filter(g => g !== grade);
        });
  }

}
