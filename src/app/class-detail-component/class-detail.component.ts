import { Component, Input, OnInit } from '@angular/core';

import { ClassService } from '../class.service';
import { TeacherService } from '../teacher.service';
import { AssignmentService } from '../assignment.service';
import { StudentService } from '../student.service';

import { Class } from '../models/class';
import { Teacher } from '../models/teacher';
import { Student } from '../models/student';
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
  studentsInClass: Student[];
  allStudents: Student[];
  studentToEnroll: Student;

  assignments: Assignment[];

  constructor(
    private classService:ClassService,
    private teacherService:TeacherService,
    private studentService:StudentService,
    private assignmentService:AssignmentService) { }

  //LifeCycle Hooks
  ngOnInit(): void {
    //get a list of all the teachers to populate select dropdown
    this.teacherService.getTeachers()
      .then(teachers => this.teachers = teachers);

    //get a list of all students to populate select dropdown
    this.studentService.getStudents()
      .then(students => this.allStudents = students);
  }

  ngOnChanges(): void {
    if(this.class){
      //get all students for this class
      this.classService.getStudentsForClass(this.class.id)
        .then(students => this.studentsInClass = students);

      //get all assignments for this class
      this.classService.getAssignmentsForClass(this.class.id)
        .then(assignments => this.assignments = assignments);
    }
  }

  //Methods
  saveClass():void {
    this.classService.updateClass(this.class)
      .then(c => console.log(`${c.name} was updated`));
  }

  deleteAssignment(assignmentToDelete: Assignment): void {
    this.assignmentService.deleteAssignment(assignmentToDelete.id)
      .then(() => this.assignments = this.assignments.filter(a => a !== assignmentToDelete));
  }

  enrollStudent():void {
    if(this.studentToEnroll){
      this.classService.addStudentToClass(this.class.id, this.studentToEnroll.id)
        .then(() => this.studentsInClass.push(this.studentToEnroll));
    }
  }

  unenrollStudent(studentToDelete: Student): void {
    this.classService.removeStudentFromClass(this.class.id, studentToDelete.id)
      .then(() => this.studentsInClass = this.studentsInClass.filter(s => s !== studentToDelete));
  }
}
