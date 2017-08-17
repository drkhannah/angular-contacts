import { Component, Input } from '@angular/core';

import { Teacher } from '../models/teacher';

@Component({
  selector: 'teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.css']
})
export class TeacherDetailComponent {
  //Properties
  @Input() teacher: Teacher;

  constructor() { }

  //Methods
  saveStudent():void {

  }
}
