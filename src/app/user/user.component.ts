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

  public displayedColumns : string[] = ['movieId', 'title', 'startDate', 'runTime', 'cinema', 'time', 'count', 'price', 'total', 'status', 'rating', 'actions']
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
      alert("Email can't be empty")
      return
    }
    alert(UserService.changeEmail(newEmail) ? 'Email has been changed' : 'Failed to change email')
  }

  public doChangeFirstName(){
    const newFirstName = prompt('Enter your new First Name:')
    if(newFirstName == '' || newFirstName== null){
      alert("First name can't be empty")
      return
    }
    alert(UserService.changeFirstName(newFirstName) ? 'First name has been changed' : 'Failed to change first name')
  }

  public doChangeLastName(){
    const newLastName = prompt('Enter your new last name:')
    if(newLastName == '' || newLastName== null){
      alert("Last name can't be empty")
      return
    }
    alert(UserService.changeLastName(newLastName) ? 'Last name has been changed' : 'Failed to change last name')
  }
  
  public doChangePhone(){
    const newPhone = prompt('Enter your new phone:')
    if(newPhone == '' || newPhone== null){
      alert("Last name can't be empty")
      return
    }
    alert(UserService.changePhone(newPhone) ? 'Phone number has been changed' : 'Failed to change phone number')
  }

  public doChangeAddress(){
    const newAddress = prompt('Enter your new Address:')
    if(newAddress == '' || newAddress== null){
      alert("Last name can't be empty")
      return
    }
    alert(UserService.changeAddress(newAddress) ? 'Address has been changed' : 'Failed to change address')
  }

  public doWatch(order : OrderModel ){
    if(UserService.changeOrderStatus('watched', order.id)){
      this.user = UserService.getActiveUser()
    }
  }

  public doCancel(order : OrderModel ){
    if(UserService.changeOrderStatus('canceled', order.id)){
      this.user = UserService.getActiveUser()
    }
  }

  public doRating(order: OrderModel, r : boolean){
    if(UserService.changeRating(r, order.id)){
      this.user = UserService.getActiveUser()
    }
  }

}
