import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Assignment } from '../models/assignment';
import { Class } from '../models/class';

import { AssignmentService } from '../assignment.service';
import { ClassService } from '../class.service';

@Component({
  selector: 'add-assignment',
  templateUrl: './add-assignment.component.html'
})
export class AddAssignmentComponent implements OnInit {
  assignment: FormGroup;
  selectedClass: Class;
  classes: Class[];

  constructor(
    private formBuilder: FormBuilder,
    private assignmentService: AssignmentService,
    private classService: ClassService,
    private route: ActivatedRoute,
    private location: Location){}

  //LifeCycler
  ngOnInit(): void {
    this.assignment = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      class: ['', [Validators.required]]
    })

    //get list of classes for select dropdown
    this.classService.getClasses().then(classes => this.classes = classes);
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
