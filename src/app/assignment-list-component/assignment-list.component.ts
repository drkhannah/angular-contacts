import { Component, OnInit } from '@angular/core';

import { AssignmentService } from '../assignment.service'

import { Assignment } from '../models/assignment';

@Component({
  selector: 'assignment-list',
  templateUrl: './assignment-list.component.html',
  styleUrls: ['./assignment-list.component.css']
})
export class AssignmentListComponent implements OnInit {
  //Properties
  assignments: Assignment[];
  selectedAssignment: Assignment;

  constructor(private assignmentService: AssignmentService) { }

  //Lifecycle Hooks
  ngOnInit() {
      this.assignmentService.getAssignments()
      .then(assignments => this.assignments = assignments);
  }

  //Methods
  deleteAssignment(assignment:Assignment): void {
    console.log("Delete assignments")
  }
}
