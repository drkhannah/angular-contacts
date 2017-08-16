import { Component, OnInit } from '@angular/core';

import { Student } from '../models/student';
import { STUDENTS } from './mock-students';

@Component({
  selector: 'student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
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
