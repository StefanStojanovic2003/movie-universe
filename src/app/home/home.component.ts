import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [JsonPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  movies : any[] | null = null

  constructor(){

    MovieService.getMovies()
      .then(rsp=> this.movies = rsp.data)

  }

}
