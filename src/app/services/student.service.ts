import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  urlServer = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  getStudents(): Observable<any>{
    return this.http.get(this.urlServer)
  }

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
