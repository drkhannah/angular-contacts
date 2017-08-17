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

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
