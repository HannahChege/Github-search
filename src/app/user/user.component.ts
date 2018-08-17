import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { HttpClientModule } from '@angular/common/http';

import { Users } from '../users';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers:[UsersService],
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
users: Users;

constructor(private usersService:UsersService,private http:HttpClient) {
  this.usersService.getUsers()


   };

  ngOnInit() {
    interface ApiResponse{
      User:string;
      Images:any;
      Bio:string;
    }
    this.http.get<ApiResponse>("https://api.github.com/users/hannahchege?access_token=505a5a7f88928ee9cb67c8b4405280c1b3a2fa1b").subscribe(data=>{
      // this.users=new Users(data.User,data.Images,data.Bio)

      console.log(data)
    })
  }


}
