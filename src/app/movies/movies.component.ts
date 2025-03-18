import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MovieModel } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { AxiosError } from 'axios';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movies',
  imports: [NgIf, NgFor, MatCardModule, MatButtonModule, RouterLink, FormsModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  
  movies : MovieModel[] | null = null
  genres: any[] = []
  directors: any[] = []
  actors: any[] = []
  runtimes: number[] = []

  selectedGenre: number | null = null
  selectedDirector: number | null = null
  selectedActor: number | null = null
  selectedRuntime: number | null = null
  searchQuery: string = ''

  constructor(){
    this.loadFilters();
    this.loadMovies();
    
      MovieService.getMovies()
        .then(rsp=> this.movies = rsp.data)
  
  }

  async loadFilters() {
    this.genres = (await MovieService.getGenres()).data;
    this.directors = (await MovieService.getDirectors()).data;
    this.actors = (await MovieService.getActors()).data;
    this.runtimes = (await MovieService.getRuntimes()).data;
  }

  async loadMovies() {
    this.movies = (await MovieService.getMovies()).data;
  }

  async searchMovies() {
    const filters: any = {};
    if (this.selectedGenre) filters.genre = this.selectedGenre;
    if (this.selectedDirector) filters.director = this.selectedDirector;
    if (this.selectedActor) filters.actor = this.selectedActor;
    if (this.selectedRuntime) filters.runtime = this.selectedRuntime;
    if (this.searchQuery) filters.search = this.searchQuery;

    this.movies = (await MovieService.searchMovies(filters)).data;
  }

  async resetSearch(){
    this.selectedActor = null;
    this.selectedGenre = null;
    this.selectedDirector = null;
    this.selectedRuntime = null;
    this.searchQuery = '';

    this.movies = (await MovieService.getMovies()).data;
  }

}
