import { Component, OnInit } from '@angular/core';
import { WatchlistService } from './watchlist.service';
import { MoviesComponent } from '../movies/movies.component';

@Component({
  selector: 'mov-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css'],
  providers: [MoviesComponent]
})
export class WatchlistComponent implements OnInit{
  watchlist: any;
  showPlot: boolean [] = [];

  constructor(private WatchlistService: WatchlistService, Moviescomponent: MoviesComponent) {
  }
  ngOnInit(): void {
    this.getWatchlist();
  }
  getWatchlist():void{
    this.watchlist = this.WatchlistService.getWatchlist();
  }

  
  removeFromWatchlist(movie: string): void {
  this.WatchlistService.removeFromWatchlist(movie);
}

togglePlot(index: number): void {
  this.showPlot[index] = !this.showPlot[index];
}
}