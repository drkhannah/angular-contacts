import { Component, OnInit } from '@angular/core';

import { StudentService } from '../student.service'

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

  constructor(private studentService: StudentService) { }

  //Lifecycle Hooks
  ngOnInit() {
      this.studentService.getStudents()
      .then(students => this.students = students);
  }

  //Methods
  deleteStudent(student: Student): void {
    console.log("Delete Student")
  }
}
