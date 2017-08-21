import { Component, Input } from '@angular/core';

import { StudentService } from '../student.service';
import { GradeService } from '../grade.service';

import { Student } from '../models/student';
import { Grade } from '../models/grade';

@Component({
  selector: 'student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent {
  //Properties
  @Input() student: Student;
  grades: Grade[];

  constructor(private studentService:StudentService,
              private gradeService:GradeService,) { }

  //Methods
  saveStudent():void {
    this.studentService.updateStudent(this.student).then(
      student =>
      console.log(`${student.first_name} was updated`));
  }

  deleteGrade(grade:Grade): void {
    this.gradeService
        .deleteGrade(grade.id)
        .then(() => {
          this.grades = this.grades.filter(g => g !== grade);
        });
  }

}
