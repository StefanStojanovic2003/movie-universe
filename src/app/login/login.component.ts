import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButton } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatButton, RouterLink, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public email:string = ''
  public password:string = ''

  constructor(private router : Router){
    if(UserService.getActiveUser()){
      router.navigate(['/user'])
      return
    }
  }

  public doLogin () {
    if(UserService.login(this.email, this.password)){
      this.router.navigate(['/gallery'])
      return
    }
    alert('Bad email or password')

  }
}
