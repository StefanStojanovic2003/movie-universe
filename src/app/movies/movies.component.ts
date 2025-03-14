import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MovieModel } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { AxiosError } from 'axios';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movies',
  imports: [NgIf, NgFor, MatCardModule, MatButtonModule, RouterLink],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  
  movies : MovieModel[] | null = null

  constructor(){
  
      MovieService.getMovies()
        .then(rsp=> this.movies = rsp.data)
  
    }

}
