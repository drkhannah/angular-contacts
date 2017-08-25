import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Grade } from './models/grade';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class GradeService {
  //Properties
  private singleStudentUrl = 'http://localhost:8080/api/student'
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  //Methods
  //GET /api/student/{id}/class/{class_id} -- Get Full Student Grade for Class
  getStudentGradeForClass(studentID: number, classID: number): Promise<number> {
    const url = `${this.singleStudentUrl}/${studentID}/class/${classID}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response.json().grade as number)
      .catch(this.handleError);
  }

  //GET /api/student/{id}/grade/{assignment_id} -- Get Student Grade for an Assignment
  getGradeForAssignment(studentID: number, assignmentID: number): Promise<Grade> {
    const url = `${this.singleStudentUrl}/${studentID}/class/${assignmentID}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response.json() as Grade)
      .catch(this.handleError);
  }

  //PUT /api/student/{id}/grade -- Update Student Grade for an Assignment / JSON Fields(Grade Object): id, grade, notes
  updateGrade(studentID: number, grade:Grade): Promise<Grade> {
    const url = `${this.singleStudentUrl}/${studentID}/grade`;
    return this.http
      .put(url, JSON.stringify(grade), {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Grade)
      .catch(this.handleError);
  }

  //DELETE /api/student/{id}/grade/{assignment_id} -- Delete Student Grade for an Assignment
  deleteGrade(studentID: number, assignmentID: number): Promise<Grade> {
    const url = `${this.singleStudentUrl}/${studentID}/grade/${assignmentID}`;
    return this.http
      .delete(url, {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Grade)
      .catch(this.handleError);
  }

  //POST /api/student/{id}/grade -- Add Student Grade for an Assignment / JSON Fields: assignment <id>, grade, notes
  addGrade(studentID: number, grade: Grade): Promise<Grade> {
    const url = `${this.singleStudentUrl}/${studentID}/grade`;
    return this.http
      .post(url, JSON.stringify(grade), {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Grade)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
