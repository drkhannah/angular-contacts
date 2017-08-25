import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Student } from './models/student';
import { Class } from './models/class';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class StudentService {
  //Properties
  private studentListUrl = 'http://localhost:8080/api/students'
  private singleStudentUrl = 'http://localhost:8080/api/student'
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  //Methods
  //GET /api/students -- Get All Students
  getStudents(): Promise<Student[]> {
    return this.http
      .get(this.studentListUrl)
      .toPromise()
      .then(response => response.json() as Student[])
      .catch(this.handleError);
  }

  //GET /api/student/{id}/classes – Get Classes for a Student
  getClassesForStudent(studentID: number): Promise<Class[]> {
    const url = `${this.singleStudentUrl}/${studentID}/classes`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response.json() as Class[])
      .catch(this.handleError);
  }

  //GET /api/student/{id} -- Get Student By ID
  getStudent(studentID: number): Promise<Student> {
    const url = `${this.singleStudentUrl}/${studentID}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response.json() as Student)
      .catch(this.handleError);
  }

  //PUT /api/student/ - Update Student Info / JSON Fields: id, first_name, last_name, classes, grades
  updateStudent(student:Student): Promise<Student> {
      return this.http
        .put(this.singleStudentUrl, JSON.stringify(student), {headers: this.headers})
        .toPromise()
        .then(response => response.json() as Student)
        .catch(this.handleError);
  }

  //DELETE /api/student/{id} -- Delete Student By ID
  deleteStudent(studentID: number): Promise<Student> {
    const url = `${this.singleStudentUrl}/${studentID}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Student)
      .catch(this.handleError);
  }

  //POST /api/student - Add Student / JSON Fields: first_name, last_name, classes, grades
  addStudent(student: Student): Promise<Student> {
    return this.http
      .post(this.singleStudentUrl, JSON.stringify(student), {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Student)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
