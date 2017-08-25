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
  //GET /api/assignments -- Get All Assignments
  getAssignments(): Promise<Assignment[]> {
    return this.http
      .get(this.assignmentListUrl)
      .toPromise()
      .then(response => response.json() as Assignment[])
      .catch(this.handleError);
  }

  //GET /api/assignment/{id} -- Get Assignment by ID
  getAssignment(assignmentID: number): Promise<Assignment> {
    const url = `${this.singleAssignmentUrl}/${assignmentID}`;
    return this.http
      .get(this.assignmentListUrl)
      .toPromise()
      .then(response => response.json() as Assignment)
      .catch(this.handleError);
  }

  //PUT /api/assignment/ -- Update Assignment / JSON Fields: name, description, class
  updateAssignment(assignment:Assignment): Promise<Assignment> {
    return this.http
      .put(this.singleAssignmentUrl, JSON.stringify(assignment), {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Assignment)
      .catch(this.handleError);
  }

  //DELETE /api/assignment/{id} -- Delete Assignment by ID
  deleteAssignment(assignmentID: number): Promise<Assignment> {
    const url = `${this.singleAssignmentUrl}/${assignmentID}`;
    return this.http
      .delete(url, {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Assignment)
      .catch(this.handleError);
  }

  //POST /api/assignment -- Add Assignment / JSON Fields: name, description, class
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
