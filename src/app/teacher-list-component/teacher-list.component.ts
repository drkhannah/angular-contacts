import { Component, OnInit } from '@angular/core';

import { TeacherService } from '../teacher.service'

import { Teacher } from '../models/teacher';

@Component({
  selector: 'teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {
  //Properties
  teachers: Teacher[];
  selectedTeacher: Teacher;

  constructor(private teacherService: TeacherService) { }

  //Lifecycle Hooks
  ngOnInit() {
      this.teacherService.getTeachers()
      .then(teachers => this.teachers = teachers);
  }

  //Methods
  onSelect(teacher:Teacher): void {
    this.selectedTeacher = teacher;
  }

  deleteTeacher(teacher:Teacher): void {
    console.log("Delete Teacher")
  }
}
