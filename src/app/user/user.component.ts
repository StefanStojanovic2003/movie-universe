import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { UserModel } from '../../models/user.model';
import { OrderModel } from '../../models/order.model';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [NgIf, NgFor],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  public user : UserModel | null = null
  public orders: OrderModel[] = []

  constructor(private router : Router){
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

}
