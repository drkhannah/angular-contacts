import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentListComponentComponent } from './student-list-component.component';

describe('StudentListComponentComponent', () => {
  let component: StudentListComponentComponent;
  let fixture: ComponentFixture<StudentListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
