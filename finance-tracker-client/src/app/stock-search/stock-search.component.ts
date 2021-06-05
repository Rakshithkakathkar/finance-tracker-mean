import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { IStock } from '../stock';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-stock-search',
  templateUrl: './stock-search.component.html',
  styleUrls: ['./stock-search.component.scss']
})
export class StockSearchComponent implements OnInit {

  stocks$!: Observable<IStock[]>;
  private searchTerms = new Subject<string>();

  constructor(private stockService: StockService) { }

  //push a search term into observable stream
  search(term: string): void {
    //searchterm a subject is source of observable values and observable
    //can subscribe to subject like an observable

    //can push values into observable by calling next
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.stocks$ = this.searchTerms.pipe(
      //wait for 300ms after keystroke
      debounceTime(300), 
      //ignore new term if same as prev term
      distinctUntilChanged(),
      //switch to new search observable each time the term changes
      switchMap((term: string) => this.stockService.searchStocks(term)),
    );
  }

}
