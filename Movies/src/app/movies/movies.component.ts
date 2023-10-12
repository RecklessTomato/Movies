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
    // You can initialize your movies array here if needed
  }

  // Update the searchMovies method to fetch data and assign it to the movies array
  async searchMovies(event: Event) {
    event.preventDefault();
  
    if (!this.searchTerm) {
      // Handle the case where the search term is empty
      console.log('Please enter a valid movie name.');
      return;
    }
  
    const apiKey = `http://www.omdbapi.com/?apikey=288a03da&t=${encodeURIComponent(this.searchTerm)}`;
  
    try {
      const response = await axios.get<Movie>(apiKey);
      if (response.data.Response === 'True') {
        this.movies = [response.data];
        this.showPlot = false;
      } else {
        this.showError = true
        this.errorMessage = 'An error occurred while fetching data.';
        console.log('Movie not found.');
      }
    } catch (error) {
      console.log('Fehler beim Abrufen der Filmdaten:', error);

    }
  }
  

  // Add a movie to the watchlist
  addToWatchlist(movie: Movie): void {
    this.watchlistService.addToWatchlist(movie);
  }

  // Toggle the plot display
  togglePlot(): void {
    this.showPlot = !this.showPlot;
  }
}
