import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  // urlServer = environment.baseUrl;

  studentsInfo: Student [] = [
    new Student(1, 'Name 1', 'LastName 1', 'idCard 101', '2022-01-07', '13456789', 'homeAddress 1', 'university 1', 'email1@mail.com', 'pas10123495859', 'Carer 1' ),
    new Student(2, 'Name 2', 'LastName 2', 'idCard 201', '2022-01-07', '23456789', 'homeAddress 2', 'university 2', 'email2@mail.com', 'pas20123495859', 'Carer 2'),
    new Student(3, 'Name 3', 'LastName 3', 'idCard 301', '2022-01-07', '33456789', 'homeAddress 3', 'university 3', 'email3@mail.com', 'pas30123495859', 'Carer 3'),
    new Student(4, 'Name 4', 'LastName 4', 'idCard 401', '2022-01-07', '43456789', 'homeAddress 4', 'university 4', 'email4@mail.com', 'pas40123495859', 'Carer 4'),
    new Student(5, 'Name 5', 'LastName 5', 'idCard 501', '2022-01-07', '53456789', 'homeAddress 5', 'university 5', 'email5@mail.com', 'pas50123495859', 'Carer 5'),
    new Student(6, 'Name 6', 'LastName 6', 'idCard 601', '2022-01-07', '63456789', 'homeAddress 6', 'university 6', 'email6@mail.com', 'pas60123495859', 'Carer 6')
  ]

  urlServer = this.studentsInfo.map;
  constructor(
    private http: HttpClient
  ) { }

  getStudents(): Student[]{
    return this.studentsInfo;
  }

  // getStudents(): Observable<any>{
  //   return this.http.get(this.urlServer)
  // }

  elminarStudent(id: string): Observable<any>{
    return this.http.delete(this.urlServer + 'student/' + id);
  }

  guardarStudent(student: Student): Observable<any>{
    return this.http.post(this.urlServer + 'student/', student);
  }

  obtenerStudent(id: string): Observable<any>{
    return this.http.get(this.urlServer + 'student/' + id);

  }

  editarStudent(id: string, student: Student): Observable<any>{
    return this.http.put(this.urlServer + 'student/' + id, student);
  }


}
