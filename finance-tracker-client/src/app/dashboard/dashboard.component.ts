import { Component, OnInit } from '@angular/core';
import { IStock } from '../stock';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  stocks: IStock[] = [];
  topFiveStocks: IStock[] = [];

  constructor(private stockService: StockService) { }

  ngOnInit(): void {
    this.getStocks();
  }

  getStocks(): void {
    this.stockService.getStocks()
      .subscribe(data => {
        this.sortByPrice(data);
      });
  }

  sortByPrice(stocks: IStock[]) : IStock[]{
    stocks.sort((a,b) => {return b.investedAmt - a.investedAmt})
    return this.stocks = stocks.splice(0,5);
  }
}
