import { Injectable } from '@angular/core';
import { Movie } from '../movie';
@Injectable({
  providedIn: 'root'
})
export class WatchlistService {
  private watchlist: Movie[] = [];

  addToWatchlist(movieToAdd: Movie): void {
    const existingMovie = this.watchlist.find(movie => movie.Title === movieToAdd.Title);
    if (!existingMovie) {
      this.watchlist.push(movieToAdd);
    } else {
      console.log('Movie already in Watchlist!');
    }
  }

  removeFromWatchlist(movieTitle: string) {
    const index = this.watchlist.findIndex(movie => movie.Title === movieTitle);
    if (index !== -1) {
      this.watchlist.splice(index, 1);
    }
  }
  getWatchlist(): any[] {
    return this.watchlist;
  }
}