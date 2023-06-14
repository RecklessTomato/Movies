import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { HttpClientModule } from '@angular/common/http';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { WatchlistService } from './watchlist/watchlist.service';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    WatchlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [WatchlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
