import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Student } from './models/student';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class StudentService {
  //Properties
  private studentListUrl = 'http://localhost:8080/api/students'
  private singleStudentUrl = 'http://localhost:8080/api/student'
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  //Methods
  getStudents(): Promise<Student[]> {
    return this.http.get(this.studentListUrl)
               .toPromise()
               .then(response => response.json() as Student[])
               .catch(this.handleError);
    }

  updateStudent(student:Student): Promise<Student> {
      return this.http
        .put(this.singleStudentUrl, JSON.stringify(student), {headers: this.headers})
        .toPromise()
        .then(response => response.json() as Student)
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
