import { Component, Input } from '@angular/core';

import { StudentService } from '../student.service';

import { Student } from '../models/student';

@Component({
  selector: 'student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent {
  //Properties
  @Input() student: Student;

  constructor(private studentService:StudentService) { }

  //Methods
  saveStudent():void {
    this.studentService.updateStudent(this.student).then(
      student =>
      console.log(`${student.first_name} was updated`));
  }

}
