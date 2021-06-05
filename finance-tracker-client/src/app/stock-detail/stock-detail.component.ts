import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {IStock} from '../stock';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.scss']
})
export class StockDetailComponent implements OnInit {

  @Input() stock?: IStock;
  //Activated route  holds information about the route to this instance of the StockDetailComponent 
  constructor( private route: ActivatedRoute, private stockService: StockService, private location: Location) { }

  ngOnInit(): void {
    this.getStock();
  }

  getStock(): void {
    //The route.snapshot is a static image of the route information shortly after the component was created.
    //The paramMap is a dictionary of route parameter values extracted from the URL. The "id" key returns the id of the hero to fetch.
    //route parameter is always string hence converting it to number
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.stockService.getStock(id)
      .subscribe(stock => this.stock = stock);
  }

  goBack(): void{
    this.location.back();
  }

  save(): void {
    if(this.stock){
      this.stock.investedAmt = this.stock.avgPrice * this.stock.quantity;
      this.stockService.updateStock(this.stock)
        .subscribe(() => this.goBack());
    }
  }
}
