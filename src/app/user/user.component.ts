import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersService } from '../users.service';
import { Users } from '../users';
import { Repositories } from '../repositories'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers:[UsersService],
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

 users: any=[];
 repositories: any =[] ;
 username:string;


constructor(public usersService:  UsersService) {
  this.usersService.getUsers().subscribe (userPage => {
    console.log(userPage);
    this.users= userPage;
  });

}
 findUser() {
     this.usersService.updateProfile(this.users);
     this.usersService.getUsers().subscribe(userPage => {
     console.log(userPage);
     this.users= userPage;
    });

     this.usersService.getUserRepos().subscribe(reposi => {
      console.log(reposi);
      this.repositories = reposi;
   });

  }
  ngOnInit() {
}


}
