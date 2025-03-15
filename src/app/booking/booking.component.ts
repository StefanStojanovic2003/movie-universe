import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieModel } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';
import { UtilsService } from '../../services/utils.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-booking',
  imports: [NgFor],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {
  public movie : MovieModel | null = null;
  
    public constructor(private route : ActivatedRoute, public utils: UtilsService){
  
      route.params.subscribe(params=>{
        MovieService.getMovieById(params['id']).then(rsp => {
          this.movie = rsp.data
        })
      })
  
    }
}
