import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Class } from './models/class';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ClassService {
  //Properties
  private classListUrl = 'http://localhost:8080/api/classes'
  private singleClassUrl = 'http://localhost:8080/api/class'
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  //Methods
  getClasses(): Promise<Class[]> {
    return this.http.get(this.classListUrl)
               .toPromise()
               .then(response => response.json() as Class[])
               .catch(this.handleError);
    }

  updateClass(c:Class): Promise<Class> {
    return this.http
      .put(this.singleClassUrl, JSON.stringify(c), {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Class)
      .catch(this.handleError);
  }

  deleteClass(classID: number): Promise<Class> {
    const url = `${this.singleClassUrl}/${classID}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Class)
      .catch(this.handleError);
  }

  addClass(c: Class): Promise<Class> {
    return this.http
      .post(this.singleClassUrl, JSON.stringify(c), {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Class)
      .catch(this.handleError);
  }

  addStudentToClass(classID: number, studentID: number): Promise<Class[]> {
    const url = `${this.singleClassUrl}/${classID}/student/${studentID}`;
    return this.http
      .post(url, null, {headers: this.headers})
      .toPromise()
      .then(response =>
        response.json().classes as Class[])
      .catch(this.handleError);
  }

  removeStudentFromClass(classID: number, studentID: number): Promise<Class> {
    const url = `${this.singleClassUrl}/${classID}/student/${studentID}`;
    return this.http
      .delete(url, {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Class)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
