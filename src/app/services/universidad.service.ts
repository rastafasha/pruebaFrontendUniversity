
import { Injectable } from '@angular/core';
import { University } from '../models/university';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class UniversidadService {

  universitiesInfo: University [] = [
    new University(1, 'University of 1u', 'Esto es una Universidad muy chulo', 'Pensum of 1p', 'Esto es una pensum muy chulo' ),
    new University(2, 'University of 2u', 'Esto es una Universidad muy chulo', 'Pensum of 2p', 'Esto es una pensum muy chulo' ),
    new University(3, 'University of 3u', 'Esto es una Universidad muy chulo', 'Pensum of 3p', 'Esto es una pensum muy chulo' ),
    new University(4, 'University of 4u', 'Esto es una Universidad muy chulo', 'Pensum of 4p', 'Esto es una pensum muy chulo' ),
    new University(5, 'University of 5u', 'Esto es una Universidad muy chulo', 'Pensum of 5p', 'Esto es una pensum muy chulo' ),
    new University(6, 'University of 6u', 'Esto es una Universidad muy chulo', 'Pensum of 6p', 'Esto es una pensum muy chulo' )
  ]



  urlServer = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  getUniversitys(): University[]{
    return this.universitiesInfo;
  }

  // getUniversitys() {
  //   return this.http.get<Country>(this.serverUrl + 'api_pais/countries/').pipe(
  //     catchError(this.handleError)
  //   );
  // }

  // getUniversitys(): Observable<any>{
  //   return this.http.get(this.urlServer)
  // }

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


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened. Please try again later.');
  }


}
