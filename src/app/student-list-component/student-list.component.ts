import { Component, OnInit } from '@angular/core';

import { StudentService } from '../student.service'

import { Student } from '../models/student';

@Component({
  selector: 'student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  //Properties
  students: Student[];
  selectedStudent: Student;

  constructor(private studentService: StudentService) { }

  //Lifecycle Hooks
  ngOnInit() {
      this.studentService.getStudents()
      .then(students => this.students = students);
  }

  //Methods
  onSelect(student:Student): void {
    this.selectedStudent = student;
  }

  deleteStudent(student:Student): void {
      this.studentService
          .deleteStudent(student.id)
          .then(() => {
            this.students = this.students.filter(s => s !== student);
            this.selectedStudent = null;
          });
  }
}
