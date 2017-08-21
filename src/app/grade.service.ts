import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Grade } from './models/grade';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class GradeService {
  //Properties
  private gradeListUrl = 'http://localhost:8080/api/grades'
  private singleGradeUrl = 'http://localhost:8080/api/grade'
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  //Methods
  getGrades(): Promise<Grade[]> {
    return this.http.get(this.gradeListUrl)
               .toPromise()
               .then(response => response.json() as Grade[])
               .catch(this.handleError);
    }

  updateGrade(grade:Grade): Promise<Grade> {
    return this.http
      .put(this.singleGradeUrl, JSON.stringify(grade), {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Grade)
      .catch(this.handleError);
  }

  deleteGrade(gradeID: number): Promise<Grade> {
    const url = `${this.singleGradeUrl}/${gradeID}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Grade)
      .catch(this.handleError);
  }

  addGrade(grade: Grade): Promise<Grade> {
    return this.http
      .post(this.singleGradeUrl, JSON.stringify(grade), {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Grade)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
