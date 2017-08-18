import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { Assignment } from '../models/assignment';

import { AssignmentService } from '../assignment.service';

@Component({
  selector: 'add-assignment',
  templateUrl: './add-assignment.component.html'
})
export class AddAssignmentComponent implements OnInit {
  assignment: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private assignmentService: AssignmentService,
    private location: Location){}

  //LifeCycler
  ngOnInit(): void {
    this.assignment = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]]
    })
  }

  //Methods
  addAssignment({ value, valid }): void {
    if (valid) {
      this.assignmentService.addAssignment(value)
        .then(assignment => {
          console.log(`${assignment.name} was added`)
          this.location.back()
        });
    }
  }
}
