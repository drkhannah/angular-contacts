import { Component, OnChanges, Input } from '@angular/core';

import { Student } from '../models/student';

@Component({
  selector: 'student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnChanges {
  //Properties
  @Input() student: Student

  constructor() { }

  //LifeCycle Hook Methods
  ngOnChanges(): void {

  }

  //Methods
  saveStudent():void {

  }

}
