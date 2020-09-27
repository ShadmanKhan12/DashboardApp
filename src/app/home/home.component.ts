import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: User[];
  constructor(private userService : UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(data=>{
      this.users = data;
       })
  }
  getUsers(){
  
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
