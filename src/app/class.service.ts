import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Class } from './models/class';
import { Assignment } from './models/assignment';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ClassService {
  //Properties
  private classListUrl = 'http://localhost:8080/api/classes'
  private singleClassUrl = 'http://localhost:8080/api/class'
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  //Methods
  //GET /api/classes -- Get All Classes
  getClasses(): Promise<Class[]> {
    return this.http
      .get(this.classListUrl)
      .toPromise()
      .then(response => response.json() as Class[])
      .catch(this.handleError);
  }

  //GET /api/class/{id} -- Get Class by ID
  getClass(classID: number): Promise<Class> {
    const url = `${this.singleClassUrl}/${classID}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response.json() as Class)
      .catch(this.handleError);
  }

  //GET /api/class/{id}/assignments – Get all assignments for a class
  getAssignmentsForClass(classID: number): Promise<Assignment[]> {
    const url = `${this.singleClassUrl}/${classID}/assignments`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response.json() as Assignment[])
      .catch(this.handleError);
  }

  //PUT /api/class/ -- Update Class / JSON Fields: id, name, description, teacher
  updateClass(c:Class): Promise<Class> {
    return this.http
      .put(this.singleClassUrl, JSON.stringify(c), {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Class)
      .catch(this.handleError);
  }

  //DELETE /api/class/{id} -- Delete Class by ID
  deleteClass(classID: number): Promise<Class> {
    const url = `${this.singleClassUrl}/${classID}`;
    return this.http
      .delete(url, {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Class)
      .catch(this.handleError);
  }

  //POST /api/class -- Add Class / JSON Fields: name, description, teache
  addClass(c: Class): Promise<Class> {
    return this.http
      .post(this.singleClassUrl, JSON.stringify(c), {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Class)
      .catch(this.handleError);
  }

  //POST /api/class/{id}/student/{student_id} -- Add Student to Class
  addStudentToClass(classID: number, studentID: number): Promise<Class[]> {
    const url = `${this.singleClassUrl}/${classID}/student/${studentID}`;
    return this.http
      .post(url, null, {headers: this.headers})
      .toPromise()
      .then(response => response.json().classes as Class[])
      .catch(this.handleError);
  }

  //DELETE /api/class/{id}/student/{student_id} -- Remove Student from Class
  removeStudentFromClass(classID: number, studentID: number): Promise<Class> {
    const url = `${this.singleClassUrl}/${classID}/student/${studentID}`;
    return this.http
      .delete(url, {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Class)
      .catch(this.handleError);
  }

  //POST /api/class/{id}/teacher/{teacher_id} -- Set Teacher for Class
  setTeacherForClass(classID: number, teacherID: number): Promise<Class> {
    const url = `${this.singleClassUrl}/${classID}/student/${teacherID}`;
    return this.http
      .post(url, null, {headers: this.headers})
      .toPromise()
      .then(response => response.json().classes as Class)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
