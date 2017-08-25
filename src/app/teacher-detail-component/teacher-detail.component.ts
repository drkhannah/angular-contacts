import { Component, Input, OnChanges } from '@angular/core';

import { TeacherService } from '../teacher.service';

import { Teacher } from '../models/teacher';
import { Class } from '../models/class';

@Component({
  selector: 'teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.css']
})
export class TeacherDetailComponent implements OnChanges {
  //Properties
  @Input() teacher: Teacher;
  teacherClasses: Class[];

  constructor(private teacherService:TeacherService) { }

  //LifeCycle Hooks
  ngOnChanges():void {
    if(this.teacher){
      this.teacherService.getClassesForTeacher(this.teacher.id).then(classes => this.teacherClasses = classes);
    }
  }

  //Methods
  saveTeacher():void {
    this.teacherService.updateTeacher(this.teacher).then(teacher => console.log(`${teacher.first_name} was updated`));
  }
}
