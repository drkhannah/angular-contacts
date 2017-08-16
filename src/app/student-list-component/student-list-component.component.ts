import { Component, OnInit } from '@angular/core';

import { Student } from '../models/student';
import { STUDENTS } from './mock-students';

@Component({
  selector: 'student-list-component',
  templateUrl: './student-list-component.component.html',
  styleUrls: ['./student-list-component.component.css']
})
export class StudentListComponentComponent implements OnInit {
  //Properties
  students: Student[]

  constructor() { }

  //Lifecycle Hooks
  ngOnInit() {
      this.students = STUDENTS;
  }

  //Methods
  deleteStudent(student: Student): void {
    console.log("Delete Student")
  }
}
