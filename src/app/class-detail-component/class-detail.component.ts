import { Component, Input, OnInit } from '@angular/core';

import { ClassService } from '../class.service';
import { TeacherService } from '../teacher.service';
import { AssignmentService } from '../assignment.service';

import { Class } from '../models/class';
import { Teacher } from '../models/teacher';
import { Assignment } from '../models/assignment';

@Component({
  selector: 'class-detail',
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.css']
})
export class ClassDetailComponent implements OnInit {
  //Properties
  @Input() class: Class;
  teachers: Teacher[];
  assignments: Assignment[];

  constructor(
    private classService:ClassService,
    private teacherService:TeacherService,
    private assignmentService:AssignmentService) { }

  //LifeCycle Hooks
  ngOnInit(): void {
    this.teacherService.getTeachers().then(teachers => this.teachers = teachers);
  }

  ngOnChanges(): void {
    if(this.class){
      this.classService.getAssignmentsForClass(this.class.id).then(assignments => this.assignments = assignments);
    }
  }

  //Methods
  saveClass():void {
    this.classService.updateClass(this.class).then(c => console.log(`${c.name} was updated`));
  }

  deleteAssignment(assignmentToDelete: Assignment): void {
    this.assignmentService.deleteAssignment(assignmentToDelete.id)
    .then(() => {
      this.assignments = this.assignments.filter(a => a !== assignmentToDelete);
    });
  }
}
