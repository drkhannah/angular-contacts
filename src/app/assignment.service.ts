import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Assignment } from './models/assignment';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AssignmentService {
  //Properties
  private assignmentListUrl = 'http://localhost:8080/api/assignments'
  private singleAssignmentUrl = 'http://localhost:8080/api/assignment'
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  //Methods
  getAssignments(): Promise<Assignment[]> {
    return this.http.get(this.assignmentListUrl)
               .toPromise()
               .then(response => response.json() as Assignment[])
               .catch(this.handleError);
  }

  updateAssignment(assignment:Assignment): Promise<Assignment> {
    return this.http
      .put(this.singleAssignmentUrl, JSON.stringify(assignment), {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Assignment)
      .catch(this.handleError);
  }

  deleteAssignment(assignmentID: number): Promise<Assignment> {
    const url = `${this.singleAssignmentUrl}/${assignmentID}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Assignment)
      .catch(this.handleError);
  }

  addAssignment(assignemnt: Assignment): Promise<Assignment> {
    return this.http
      .post(this.singleAssignmentUrl, JSON.stringify(assignemnt), {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Assignment)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
