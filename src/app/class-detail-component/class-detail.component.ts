import { Component, Input } from '@angular/core';

import { ClassService } from '../class.service';

import { Class } from '../models/class';

@Component({
  selector: 'class-detail',
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.css']
})
export class ClassDetailComponent {
  //Properties
  @Input() class: Class

  constructor(private classService:ClassService) { }

  //Methods
  saveClass():void {
    this.classService.updateClass(this.class).then(c => console.log(`${c.name} was updated`));
  }
}
