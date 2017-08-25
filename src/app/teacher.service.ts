import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Teacher } from './models/teacher';
import { Class } from './models/class';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TeacherService {
  //Properties
  private teacherListUrl = 'http://localhost:8080/api/teachers'
  private singleTeacherUrl = 'http://localhost:8080/api/teacher'
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  //Methods
  //GET /api/teachers -- Get All Teachers
  getTeachers(): Promise<Teacher[]> {
    return this.http
      .get(this.teacherListUrl)
      .toPromise()
      .then(response => response.json() as Teacher[])
      .catch(this.handleError);
  }

  //GET /api/teacher/{id} -- Get Teacher by ID
  getTeacher(teacherID: number): Promise<Teacher> {
    const url = `${this.singleTeacherUrl}/${teacherID}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response.json() as Teacher)
      .catch(this.handleError);
  }

  //GET /api/teacher/{id}/classes -- Get All Classes for a Teacher
  getClassesForTeacher(teacherID: number): Promise<Class[]> {
    const url = `${this.singleTeacherUrl}/${teacherID}/classes`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response.json() as Class[])
      .catch(this.handleError);
  }

  //PUT /api/teacher/ -- Update Teacher / JSON Fields: id, first_name, last_name
  updateTeacher(teacher:Teacher): Promise<Teacher> {
    return this.http
      .put(this.singleTeacherUrl, JSON.stringify(teacher), {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Teacher)
      .catch(this.handleError);
  }

  //DELETE /api/teacher/{id} - Delete Teacher by ID
  deleteTeacher(teacherID: number): Promise<Teacher> {
    const url = `${this.singleTeacherUrl}/${teacherID}`;
    return this.http
      .delete(url, {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Teacher)
      .catch(this.handleError);
  }

  //POST /api/teacher -- Add Teacher / JSON Fields: first_name, last_name
  addTeacher(teacher: Teacher): Promise<Teacher> {
    return this.http
      .post(this.singleTeacherUrl, JSON.stringify(teacher), {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Teacher)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
