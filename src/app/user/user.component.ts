import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
import { UserModel } from '../../models/user.model';
import { NgFor, NgIf } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { UtilsService } from '../../services/utils.service';
import { OrderModel } from '../../models/order.model';

@Component({
  selector: 'app-user',
  imports: [NgIf, MatTableModule, MatCardModule, MatButtonModule, RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  public displayedColumns : string[] = ['movieId', 'title', 'startDate', 'runTime', 'cinema', 'count', 'price', 'total', 'status', 'rating', 'actions']
  public user : UserModel | null = null
  

  constructor(private router : Router, public utils : UtilsService){
    if(!UserService.getActiveUser()){
      router.navigate(['/home'])
      return
    }

    this.user = UserService.getActiveUser()

  }

  public doChangePassword(){
    const newPassword = prompt('Enter your new password:')
    if(newPassword == '' || newPassword == null){
      alert("Password can't be empty")
      return
    }
    alert(UserService.changePassword(newPassword) ? 'Password has been changed' : 'Failed to change password')
  }

  public doChangeEmail(){
    const newEmail = prompt('Enter your new email:')
    if(newEmail == '' || newEmail== null){
      alert("Password can't be empty")
      return
    }
    alert(UserService.changeEmail(newEmail) ? 'Email has been changed' : 'Failed to change email')
  }

  public doWatch(order : OrderModel ){
    if(UserService.changeOrderStatus('watched', order.id)){
      this.user = UserService.getActiveUser()
    }
  }

}
