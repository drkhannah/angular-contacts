import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Teacher } from './models/teacher';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TeacherService {
  //Properties
  private teacherListUrl = 'http://localhost:8080/api/teachers'
  private singleTeacherUrl = 'http://localhost:8080/api/teacher'
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  //Methods
  getTeachers(): Promise<Teacher[]> {
    return this.http.get(this.teacherListUrl)
               .toPromise()
               .then(response => response.json() as Teacher[])
               .catch(this.handleError);
    }

  updateTeacher(teacher:Teacher): Promise<Teacher> {
    return this.http
      .put(this.singleTeacherUrl, JSON.stringify(teacher), {headers: this.headers})
      .toPromise()
      .then(res => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
