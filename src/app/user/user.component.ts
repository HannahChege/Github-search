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

 users;
 repositories ;
 user:string;


constructor(public usersService:  UsersService) {
  this.usersService.getUsers().subscribe (userPage => {
    console.log(userPage);
    this.users= userPage;
  });

}
 findUser() {
     this.usersService.updateProfile(this.user);
     this.usersService.getUsers().subscribe(userPage => {
     console.log(userPage);
     this.users= userPage;
    });

     this.usersService.getUserRepos().subscribe(repositories => {
      console.log(repositories);
      this.repositories = repositories;
   });

  }
  ngOnInit() {
}


}
