import { Component, OnInit, Input } from '@angular/core';

import { Assignment } from '../models/assignment';

@Component({
  selector: 'assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent {
  //Properties
  @Input() assignment: Assignment

  constructor() { }

  //Methods
  saveAssignment():void {

  }
}
