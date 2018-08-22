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

 findUser($name) {
  console.log($name.target.value);
  this.us.getUsers($name.target.value)
 }
 
constructor(public us:  UsersService) {}


  //    this.usersService.getUserRepos().subscribe(reposi => {
  //     console.log(reposi);
  //     this.repositories = reposi;
  //  });

  // }
  ngOnInit() {
}


}
