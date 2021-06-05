import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IStock } from './stock';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  private stocksUrl = 'http://localhost:3000/api/stocks';

  httpOptions = {
    headers: new HttpHeaders({'Content-type': 'application/json'})
  };
  constructor(private http: HttpClient) {}

  getStocks(): Observable<IStock[]> {
    return this.http
      .get<IStock[]>(this.stocksUrl)
      .pipe(catchError(this.handleError<IStock[]>('getStocks', [])));
  }

  getStock(id: number): Observable<IStock> {
    const url = `${this.stocksUrl}/${id}`;
    return this.http.get<IStock>(url)
    .pipe(
      catchError(this.handleError<IStock>(`getStock id=${id}`))
    )
  }

  updateStock(stock: IStock): Observable<any> {
    return this.http.put(this.stocksUrl, stock, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateStock'))
    )
  }

  addStock(stock: IStock): Observable<IStock> {
    return this.http.post<IStock>(this.stocksUrl, stock, this.httpOptions)
    .pipe(
      catchError(this.handleError<IStock>('addStock'))
    );
  }

  deleteStock(id: number): Observable<IStock> {
    const url =`${this.stocksUrl}/${id}`;

    return this.http.delete<IStock>(url, this.httpOptions).pipe(
      catchError(this.handleError<IStock>('deleteStock'))
    );
  }

  searchStocks(term: string) : Observable<IStock[]> {
    if(!term.trim()){
      return of([]);
    }
    return this.http.get<IStock[]>(`${this.stocksUrl}/?name=${term}`).pipe(
      catchError(this.handleError<IStock[]>('searchStocks', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
