import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StocksComponent } from './stocks/stocks.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { StockDetailComponent } from './stock-detail/stock-detail.component' 

const routes: Routes = [
  { path: 'stocks', component: StocksComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: StockDetailComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
