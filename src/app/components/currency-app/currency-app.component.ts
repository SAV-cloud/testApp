import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './currency.service';
import { Currency } from './app.model';

@Component({
  selector: 'currency-app',
  templateUrl: './currency-app.component.html',
  styleUrls: ['./currency-app.component.css']
})
export class CurrencyAppComponent implements OnInit {
  usdRate!: number;
  eurRate!: number;
  arrayofValue!: Currency[];
  arrayHeaderValue!: Currency[];
  amount!: number;
  fromCurrency: string = 'USD';
  toCurrency: string = 'EUR';
  convertedAmount!: any;

  constructor(private CurrencyService: CurrencyService) { }

  ngOnInit(): void {
    this.CurrencyService.getExchange().subscribe(data => {
      
      this.arrayHeaderValue = data.filter(el => (el.currencyCodeA === 840 && el.currencyCodeB === 980) || (el.currencyCodeA === 978 && el.currencyCodeB === 980));
      this.arrayHeaderValue.forEach(el => {
        if (el.currencyCodeA === 840) {
          el.name = 'USD';
        } else if (el.currencyCodeA == 978) {
          el.name = 'EUR';
        }
      });
      this.arrayofValue = [...this.arrayHeaderValue];
      const newCurrency: Currency = {
        currencyCodeA: 123,
        currencyCodeB: 456,
        rateBuy: 1,
        rateSell: 1,
        name: "UAH"
      }
      this.arrayofValue.push(newCurrency);
    });
  }

  convertCurrency(): void {
      const valueFromCurrency: Currency | undefined = this.arrayofValue.find(currency => 
        currency.name === this.fromCurrency
      );
      const valueToCurrency: Currency | undefined = this.arrayofValue.find(currency => 
        currency.name === this.toCurrency
      );
      const valueToCurrencyConvert = Number(valueToCurrency?.rateBuy);
      const valueFromCurrencyConvert = Number(valueFromCurrency?.rateBuy);
      this.convertedAmount = valueFromCurrencyConvert/valueToCurrencyConvert*this.amount;
  }
}