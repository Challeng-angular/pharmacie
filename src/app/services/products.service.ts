import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Product } from '../product/product';

// ici que je dois modifier

@Injectable({ providedIn: 'root' })
export class ProductsService {
  // Attributs
  private productUrl = 'api/products'; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  // Methodes
  constructor(private http: HttpClient) {} //constructeur vide

  /** GET product from the server  */
  getProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>(this.productUrl)
      .pipe(tap((_) => console.log('TODO à modifier')));
  }

  /** GET product by id. Will 404 if id not found */
  getProduct(id: number): Observable<Product> {
    const url = `${this.productUrl}/${id}`;
    return this.http.get<Product>(url).pipe(tap((_) => console.log));
  }



  
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote loggin infrastructure
      console.error(error); // log to console instead

      return of(result as T); 
    };
  }

  /** Log a ProductService message with the Service */
  private log(message: string) {
    // TODO: Refactore quand on aura du temps. 
    console.log(`TODO a supprimer le message, log : ${message}`);
  }
}
