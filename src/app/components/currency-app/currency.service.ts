// currency.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Currency } from './app.model';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private apiUrl = 'https://api.monobank.ua/bank/currency';

  constructor(private http: HttpClient) { }

  getExchange(): Observable<Currency[]> {
    return this.http.get<Currency[]>(this.apiUrl);
  }
}
