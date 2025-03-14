import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieModel } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';
import { JsonPipe } from '@angular/common';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-details',
  imports: [JsonPipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  
  public movie : MovieModel | null = null;

  public constructor(private route : ActivatedRoute, public utils: UtilsService){

    route.params.subscribe(params=>{
      MovieService.getMovieById(params['id']).then(rsp => {
        this.movie = rsp.data
      })
    })

  }

}
