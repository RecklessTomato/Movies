import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { MoviesComponent } from './movies/movies.component';


const routes: Routes = [
  {path:'Watchlist',component: WatchlistComponent}, 
  {path:'Movies',component: MoviesComponent},
  { path: '', redirectTo: 'Movies', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
