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

  deleteClass(classToDelete:Class): void {
    this.classService
        .deleteClass(classToDelete.id)
        .then(() => {
          this.classes = this.classes.filter(c => c !== classToDelete);
          this.selectedClass = null;
        });
  }
}
