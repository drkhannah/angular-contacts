import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { GradeService } from '../grade.service';
import { ClassService } from '../class.service';
import { AssignmentService } from '../assignment.service';

import { Student } from '../models/student';
import { Grade } from '../models/grade';
import { Assignment } from '../models/assignment';
import { Class } from '../models/class';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'add-grade',
  templateUrl: './add-grade.component.html',
  styleUrls: ['./add-grade.component.css']
})
export class AddGradeComponent implements OnInit {
  //Properties
  studentID: number;
  studentName: string;
  classes: Class[];
  assignments: Assignment[]
  grade: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private gradeService: GradeService,
    private classService: ClassService,
    private assignmentService: AssignmentService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  //LifeCycle Hooks
  ngOnInit() {
    //get info out of router paramaters
    this.route.paramMap
      .subscribe((params) => {
        this.studentID = +params.get('id');
        this.studentName = params.get('name');
      });

    //setup the form
    this.grade = this.formBuilder.group({
      class: ['', [Validators.required]],
      assignment: ['', [Validators.required]],
      notes: ['', [Validators.required]],
      grade: ['', [Validators.required]]
    })

    //get all classes to populate dropdown list
    this.classService.getClasses()
    .then(classes => this.classes = classes);

    //get all assignments to populate dropdown list
    this.assignmentService.getAssignments()
    .then(assignments => this.assignments = assignments);
  }

  //Methods
  addGrade({ value, valid }):void {
    if (valid) {
      this.gradeService.addGrade(this.studentID, value)
        .then(grade => {
          console.log(`${grade.assignment.name} was added for ${this.studentName}`)
          this.location.back()
        });
    }
  }
}
