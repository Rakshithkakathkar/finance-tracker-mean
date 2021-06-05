import { Component, OnInit } from '@angular/core';
import { IStock } from '../stock';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StocksComponent implements OnInit {

  stocks: IStock[] =[];
  constructor(private stockService: StockService) { }

  ngOnInit(): void {
    this.getStocks();
  }

  getStocks(): void {
    this.stockService.getStocks()
      .subscribe(stocks => this.stocks = stocks);
  }

  add(name: any, avgPrice: any, quantity: any): void {
    name = name.trim();
    if(!name || !avgPrice || !quantity) { return; }
    let investedAmt = avgPrice * quantity; 
    this.stockService.addStock( { name, avgPrice, quantity, investedAmt } as IStock)
      .subscribe(stock => {
        this.stocks.push(stock);
      })
  }

  delete(stock: IStock): void {
    this.stocks = this.stocks.filter(s => s!== stock)
    this.stockService.deleteStock(stock._id).subscribe();
  }

}
