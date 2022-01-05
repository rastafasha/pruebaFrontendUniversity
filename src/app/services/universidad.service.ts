import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { University } from '../models/university';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class UniversidadService {

  urlServer = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  getUniversitys(): Observable<any>{
    return this.http.get(this.urlServer)
  }

  elminarUniversity(id: string): Observable<any>{
    return this.http.delete(this.urlServer + 'university/' + id);
  }

  guardarUniversity(university: University): Observable<any>{
    return this.http.post(this.urlServer + 'university/', university);
  }

  obtenerUniversity(id: string): Observable<any>{
    return this.http.get(this.urlServer + 'university/' + id);

  }

  editarUniversity(id: string, university: University): Observable<any>{
    return this.http.put(this.urlServer + 'university/' + id, university);
  }


}
