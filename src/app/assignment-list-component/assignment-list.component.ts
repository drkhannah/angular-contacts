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
  onSelect(assignment:Assignment): void {
    this.selectedAssignment = assignment;
  }

  deleteAssignment(assignment:Assignment): void {
    this.assignmentService
        .deleteAssignment(assignment.id)
        .then(() => {
          this.assignments = this.assignments.filter(a => a !== assignment);
        });
  }
}
