import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicTableComponent } from './controllers/dynamic-table/dynamic-table.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './controllers/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'controllers/home', component: HomeComponent },
  { path: 'controllers/dynamic-table', component: DynamicTableComponent }
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }