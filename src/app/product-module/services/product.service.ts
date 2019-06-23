import { Injectable } from '@angular/core';
import { IProduct } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://localhost:8080/product';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]>  {
      return this.http.get<IProduct[]>(this.baseUrl + '/products').pipe(
        catchError(err => {
          if (err.status === 401) {
              return EMPTY;
          } else {
              return throwError(err);
          }
     })
      );
  }

  getProduct(id: number): Observable<IProduct>{
    return this.http.get<IProduct>(this.baseUrl + '/get/' + id.toString());
  }

}
