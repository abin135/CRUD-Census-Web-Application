import { Injectable } from '@angular/core';
import { Census } from './Census';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
 
export class CrudService {
 
  // Node/Express API
  REST_API: string = 'http://localhost:8000/api';
 
  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
 
  constructor(private httpClient: HttpClient) { }
 
  // Get all censuses
  GetCensuses() {
    return this.httpClient.get(`${this.REST_API}`);
  }

  //Get one census
  GetCensus(id: any) {
    console.log('getting census', id);
    return this.httpClient.get(`${this.REST_API}/${id}`)
  }

  // Add
  AddCensus(data: Census): Observable<any> {
    let API_URL = `${this.REST_API}/add-census`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Delete
  DeleteCensus(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/delete-census/${id}`;
    return this.httpClient.delete(API_URL, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      );
  }

  // Update
  UpdateCensus(id: any, data: Census): Observable<any> {
    let API_URL =`${this.REST_API}/update-census/${id}`;
    return this.httpClient.put(API_URL, data)
      .pipe(
        catchError(this.handleError)
      );
  }
 
  // Error 
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
