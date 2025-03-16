import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MovieService } from '../../services/movie.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-signup',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatButton, RouterLink, FormsModule, RouterLink, NgFor, NgIf, MatSelectModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  public genreList : string[] = []
  public email  = ''
  public password  = ''
  public repeatPassword = ''
  public firstName  = ''
  public lastName  = ''
  public phone  = ''
  public address = ''
  public genre = ''

  public constructor(){
    MovieService.getGenres()
    .then(rsp => {
      this.genreList = rsp.data.map((genre : any) => genre.name)
    })
  }

  public doSignup(){}


}
