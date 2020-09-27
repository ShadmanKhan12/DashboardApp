import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: User[];
  userFormData : User;
  constructor(private userService : UserService) { 
    this.userFormData = new User();
  }
@ViewChild('addUserForm',{static: false}) form : any;
  ngOnInit() {
    
  }
  submitClick(userFormData : User){
    this.users.push(userFormData);
    this.userFormData = new User();
    this.form.reset();
  }
  getUsers(){
    this.userService.getUsers().subscribe(data=>{
      this.users = data;
       })
  }
  deleteUser(user : any){
    this.users = this.users.filter(m=>m.id != user.id);
  }
   
  takeAction(value : any,user : any){
    console.log('value',value)
    if(value == "Delete"){
      this.users = this.users.filter(m=>m.id != user.id);
    }
  }
}
