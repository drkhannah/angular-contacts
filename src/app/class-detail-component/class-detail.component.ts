import { Component, Input, OnInit } from '@angular/core';

import { ClassService } from '../class.service';
import { TeacherService } from '../teacher.service';

import { Class } from '../models/class';
import { Teacher } from '../models/teacher';

@Component({
  selector: 'class-detail',
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.css']
})
export class ClassDetailComponent implements OnInit {
  //Properties
  @Input() class: Class;
  teachers: Teacher[];

  constructor(
    private classService:ClassService,
    private teacherService:TeacherService) { }

  //LifeCycle Hooks
  ngOnInit(): void {
    this.teacherService.getTeachers().then(teachers => this.teachers = teachers);
  }

  //Methods
  saveClass():void {
    this.classService.updateClass(this.class).then(c => console.log(`${c.name} was updated`));
  }
}
