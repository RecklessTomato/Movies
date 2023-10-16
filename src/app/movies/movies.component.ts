import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { WatchlistService } from '../watchlist/watchlist.service';
import { Movie } from '../movie';

@Component({
  selector: 'mov-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  showPlot: boolean = true;
  searchTerm: string=""
  showError: boolean = false;
  errorMessage: string = ""

  constructor(private watchlistService: WatchlistService) {}

  ngOnInit(): void {
  }

  // fetching data and put it into the movies Array
  async searchMovies(event: Event) {
    event.preventDefault();
  
    if (!this.searchTerm) {
      // error if the movie Data could not be fetched 
      console.log('An error occurred while fetching data.');
    }
  
    const apiKey = `http://www.omdbapi.com/?apikey=288a03da&t=${encodeURIComponent(this.searchTerm)}`;
  
    try {
      const response = await axios.get<Movie>(apiKey);
      if (response.data.Response === 'True') {
        this.movies = [response.data];
        this.showPlot = false;
        this.showError = false;
      } else {
        this.showError = true
        this.errorMessage = 'No Movie called "'+ this.searchTerm + '"';
        alert(this.errorMessage);
        return console.log('Movie not found.'); 
      }
    } catch (error) {
      console.log('Fehler beim Abrufen der Filmdaten:', error);

    }
  }
  

  // add a movie to the watchlist
  addToWatchlist(movie: Movie): void {
    this.watchlistService.addToWatchlist(movie);
  }

  // toggle the plot display
  togglePlot(): void {
    this.showPlot = !this.showPlot;
  }
}
