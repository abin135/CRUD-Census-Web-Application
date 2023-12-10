import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CensusesListComponent } from './components/censuses-list/censuses-list.component';
import { AddCensusComponent } from './components/add-census/add-census.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'censuses-list' },
  { path: 'censuses-list', component: CensusesListComponent },
  { path: 'add-census', component: AddCensusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
