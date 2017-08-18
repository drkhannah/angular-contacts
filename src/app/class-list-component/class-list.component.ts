import { Component, OnInit } from '@angular/core';

import { ClassService } from '../class.service'

import { Class } from '../models/class';

@Component({
  selector: 'class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {
  //Properties
  classes: Class[];
  selectedClass: Class;

  constructor(private classService: ClassService) { }

  //Lifecycle Hooks
  ngOnInit() {
      this.classService.getClasses()
      .then(classes => this.classes = classes);
  }

  //Methods
  onSelect(c:Class): void {
    this.selectedClass = c;
  }

  deleteClass(c:Class): void {
    console.log("Delete Class")
  }
}
