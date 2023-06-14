import { Component } from '@angular/core';
import axios from 'axios'
import { WatchlistService } from '../watchlist/watchlist.service';

@Component({
  selector: 'mov-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent {
  movie: any;
  showPlot: boolean = true;
  
  
  
// hier kommt die API Schnittstelle
async searchMovies(searchTerm : string, event : Event): Promise<void> {
  event.preventDefault();

  try{

    const apiKey = 'http://www.omdbapi.com/?Apikey=288a03da&t=' + searchTerm;

  if (searchTerm){
    const response = await axios.get(apiKey);
    this.movie = response.data;
    this.showPlot = false;
    console.error(Error);
  }
} catch (error){
    console.log('Fehler beim Abrufen der Filmdaten:', error);
      this.movie = null ; //  das Ergebnis auf null um anzuzeigen, dass ein Fehler aufgetreten ist
  }
}

// einfügen der Filme in die Watchlist
constructor(private watchlistService: WatchlistService) {}

addToWatchlist(movie: any): void {
  this.watchlistService.addToWatchlist(this.movie);
}

togglePlot(): void{
  this.showPlot = !this.showPlot;
}

}