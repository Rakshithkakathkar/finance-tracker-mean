// import { Injectable } from '@angular/core';
// import { InMemoryDbService } from 'angular-in-memory-web-api';
// import { IStock } from './stock'; 

// @Injectable({
//   providedIn: 'root'
// })
// export class InMemoryDataService implements InMemoryDbService{
//   createDb(){
//     const stocks = [
//       {id: 1, name: 'AMBUJACEM', quantity: 3, avgPrice: 273.20, investedAmt: 819.6},
//       {id: 2, name: 'ASIANPAINT', quantity: 1, avgPrice: 2186.95, investedAmt:  2186.95},
//       {id: 3, name: 'BECTORFOOD', quantity: 5, avgPrice: 452.32, investedAmt: 2261.6},
//       {id: 4, name: 'BURGERKING', quantity: 25, avgPrice: 129.31, investedAmt: 3232.75},
//       {id: 5, name: 'CADILAHC', quantity: 2, avgPrice: 571.05, investedAmt: 1142.1},
//       {id: 6, name: 'DEEPAKNTR', quantity: 1, avgPrice: 1338, investedAmt: 1338},
//       {id: 7, name: 'INFY', quantity: 2, avgPrice: 1303.28, investedAmt: 2606.56},
//       {id: 8, name: 'ITC', quantity: 7, avgPrice: 201.91, investedAmt: 1413.37},
//       {id: 9, name: 'IRFC', quantity: 575, avgPrice: 26, investedAmt: 14950},
//       {id: 10, name: 'JUBLFOOD', quantity: 1, avgPrice: 3144, investedAmt: 3144}
//     // ];
//     return {stocks};
//   }

//   // Overrides the genId method to ensure that a stock always has an id
//   // If stocks array is empty, the method returns initial number (11).
//   // if stocks array is not empty, method returns the highest stock id + 1.
//   genId(stocks: IStock[]) : number {
//     return stocks.length > 0 ? Math.max(...stocks.map(stock => stock.id)) + 1 : 11;
//   }
//   constructor() { }
// }
