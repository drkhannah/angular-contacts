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
  updateGrade(grade:Grade): Promise<Grade> {
    return this.http
      .put(this.singleStudentUrl, JSON.stringify(grade), {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Grade)
      .catch(this.handleError);
  }

  deleteGrade(studentID: number, assignmentID: number): Promise<Grade> {
    const url = `${this.singleStudentUrl}/${studentID}/grade/${assignmentID}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(response =>
        response.json() as Grade)
      .catch(this.handleError);
  }

  addGrade(studentID: number, grade: Grade): Promise<Grade> {
    const url = `${this.singleStudentUrl}/${studentID}/grade`;
    return this.http
      .post(url, JSON.stringify(grade), {headers: this.headers})
      .toPromise()
      .then(response =>
        response.json() as Grade)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
