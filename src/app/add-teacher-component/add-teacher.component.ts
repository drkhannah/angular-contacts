import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { Teacher } from '../models/teacher';

import { TeacherService } from '../teacher.service';

@Component({
  selector: 'add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {
  teacher: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private teacherService: TeacherService,
    private location: Location){}

  //LifeCycler
  ngOnInit(): void {
    this.teacher = this.formBuilder.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]]
    })
  }

  //Methods
  addTeacher({ value, valid }): void {
    if (valid) {
      this.teacherService.addTeacher(value)
        .then(teacher => {
          console.log(`${teacher.first_name} was added`)
          this.location.back()
        });
    }
  }
}
