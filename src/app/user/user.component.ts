import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';


import { Users } from '../users';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers:[UsersService],
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
user: Users;

constructor(private usersService:UsersService,private http:HttpClient) {
  this.usersService.getUsers().subscribe (userPage => {
    console.log(userPage);
    this.username = userPage;
  });

  // findUser() {
  //   this.usersService.updateProfile(this.users);
  //   this.usersService.getUserInfo().subscribe(userPage => {
  //     console.log(userPage);
  //     this.users = userPage;
  //   });

   };

  ngOnInit() {
    interface ApiResponse{
      login:string;
      avatar_url:any;
      repos_url:string;
    }
    this.http.get<ApiResponse>("https://api.github.com/users/hannahchege?access_token=505a5a7f88928ee9cb67c8b4405280c1b3a2fa1b").subscribe(data=>{
      // this.users=new Users(data.User,data.Images,data.Bio)
      this.users = new Users(data.avatar_url, data.login, data.repos_url);
      console.log(data)
    })
  }


}
