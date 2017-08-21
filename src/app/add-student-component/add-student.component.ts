import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { Student } from '../models/student';

import { StudentService } from '../student.service';

@Component({
  selector: 'add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  student: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService,
    private location: Location){}

  //LifeCycler
  ngOnInit(): void {
    this.student = this.formBuilder.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]]
    })
  }

  //Methods
  addStudent({ value, valid }): void {
    if (valid) {
      this.studentService.addStudent(value)
        .then(student => {
          console.log(`${student.first_name} was added`)
          this.location.back()
        });
    }
  }
}
