import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/pais.interfaces';
// Observable with Pipe
// import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';


  // Params getter 
  get httpParams() {
    return new HttpParams().set('fields', 'name,capital,alpha2Code');
  }

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]> {

    const url = `${this.apiUrl}/name/${termino}`;

    // Http Observer Call with params
    // return this.http
    //            .get<Country[]>(url, params: this.httpParams)
    //            .pipe(catchError(err => of([])));

    return this.http
      .get<Country[]>(url);
    // Observable with Pipe
    // .pipe(catchError(err => of([])))
    
  }

  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url);
  }

  getPaisPorCodigo(id: string): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  getPaisPorRegion(region: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url);
  }

}
