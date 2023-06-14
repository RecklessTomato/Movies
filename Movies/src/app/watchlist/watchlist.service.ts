import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {
  private watchlist: any[] = [];

  addToWatchlist(movie: any): void {
    const existingMovie = this.watchlist.find(item => item.Title === movie.Title);
    if (!existingMovie) {
      this.watchlist.push(movie);
    } else {
      // Film bereits in der Watchlist vorhanden
      console.log('Film bereits in der Watchlist vorhanden!');
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