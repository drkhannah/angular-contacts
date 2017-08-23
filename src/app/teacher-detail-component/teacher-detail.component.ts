import { Component, Input, OnInit } from '@angular/core';

import { TeacherService } from '../teacher.service';

import { Teacher } from '../models/teacher';

@Component({
  selector: 'teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.css']
})
export class TeacherDetailComponent {
  //Properties
  @Input() teacher: Teacher;

  constructor(private teacherService:TeacherService) { }

  //Methods
  saveTeacher():void {
    this.teacherService.updateTeacher(this.teacher).then(teacher => console.log(`${teacher.first_name} was updated`));
  }
}
