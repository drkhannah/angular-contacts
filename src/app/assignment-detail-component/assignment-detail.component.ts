import { Component, OnInit, Input } from '@angular/core';

import { AssignmentService } from '../assignment.service';

import { Assignment } from '../models/assignment';

@Component({
  selector: 'assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent {
  //Properties
  @Input() assignment: Assignment

  constructor(private assignmentService:AssignmentService) { }

  //Methods
  saveAssignment():void {
    this.assignmentService.updateAssignment(this.assignment).then(assignment => console.log(`${assignment.name} was updated`));
  }
}
