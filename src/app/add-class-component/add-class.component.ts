import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { Class } from '../models/class';

import { ClassService } from '../class.service';

@Component({
  selector: 'add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.css']
})
export class AddClassComponent implements OnInit {
  class: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private classService: ClassService,
    private location: Location){}

  //LifeCycler
  ngOnInit(): void {
    this.class = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]]
    })
  }

  //Methods
  addClass({ value, valid }): void {
    if (valid) {
      this.classService.addClass(value)
        .then(c => {
          console.log(`${c.name} was added`)
          this.location.back()
        });
    }
  }
}
