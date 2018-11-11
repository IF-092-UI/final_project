import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from '../models/students.model';
import { Class } from '../models/classesForStudents';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
      'Access-Control-Allow-Headers': 'accept, content-type',
      'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsIlJvbGVzIjp7ImF1dGhvcml0eSI6IlJPTEVfQURNSU4ifSwiZXhwIjoxNTQxOTY3OTgzLCJpYXQiOjE1NDE5NjQzODMsImp0aSI6IjIzMSJ9.Ev6nHcJKtq_ihVnrG5B2t9K7bU1KnBFhzqhmJwAnfl00sll0IsuB7nGBqJ2nHjZpthFDwYw9nYJKNOaUWLA_og'
    })
  };

  private classesUrl = 'https://fierce-shore-32592.herokuapp.com/classes';
  private studentsUrl = 'https://fierce-shore-32592.herokuapp.com/students';
  private studentByClassUrl = 'https://fierce-shore-32592.herokuapp.com/students/classes/';

  constructor (private http: HttpClient) { }

  getClasses() {
    return this.http.get<Class[]>(this.classesUrl, this.httpOptions);
  }

  getStudents(idClass): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentByClassUrl + idClass, this.httpOptions);
  }

  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.studentsUrl, student, this.httpOptions);
  }

  changeStudent(student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.studentsUrl}/${student.id}`, student, this.httpOptions);
  }
}