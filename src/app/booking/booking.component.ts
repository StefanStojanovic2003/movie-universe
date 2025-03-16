import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieModel } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';
import { UtilsService } from '../../services/utils.service';
import { NgFor, NgIf } from '@angular/common';
import { CinemasModel } from '../../models/cinemas.model';
import { CinemasService } from '../../services/cinemas.service';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-booking',
  imports: [NgFor, NgIf, FormsModule, MatInputModule, MatSelectModule, MatFormFieldModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {
  public movie : MovieModel | null = null
  public cinemas: CinemasModel[] = CinemasService.getCinemas()
  public selectedCinema: number = this.cinemas[0].id
  public selectedTicketCount: number = 1
  public selectedPrice : number = 150

  
    public constructor(private route : ActivatedRoute, public utils: UtilsService, private router : Router){
  
      route.params.subscribe(params=>{
        MovieService.getMovieById(params['id']).then(rsp => {
          this.movie = rsp.data
        })
      })
  
    }

    public doOrder(){
      const result = UserService.createOrder({
        id: new Date().getTime(),
        movieId: this.movie!.movieId,
        title: this.movie!.originalTitle,
        startDate: this.movie!.startDate,
        runTime: this.movie!.runTime,
        cinema: CinemasService.getCinemaById(this.selectedCinema)!,
        count: this.selectedTicketCount,
        pricePerItem: this.selectedPrice,
        status: 'ordered',
        rating: null ,
      })

      result ? this.router.navigate(['/user']) : alert('An error occured while creating an order')

    }
}
